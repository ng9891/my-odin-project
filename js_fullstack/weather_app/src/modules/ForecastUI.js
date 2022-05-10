import {format, fromUnixTime} from 'date-fns';
import {removeChildren, createContainer, addChildren, degree} from '../helpers/helper';

const ForecastUI = (Weather) => {
  const $forecast = document.querySelector('.forecast');
  const $location = document.querySelector('.location');
  const $smallDetail = document.querySelector('.small-details');
  const $currWeather = document.querySelector('.weather');
  const $hourly = document.querySelector('.hourly');

  const _createLocation = (city, date) => {
    removeChildren($location);
    const citySpan = createContainer('span', 'city');
    const dateSpan = createContainer('span', 'date');

    citySpan.textContent = city;
    dateSpan.textContent = format(date, 'd MMMM yyyy');
    addChildren($location, [citySpan, dateSpan]);
  };

  const _createSmallDetail = (date, temp, lowTemp, highTemp, feel) => {
    removeChildren($smallDetail);
    temp = Math.floor(temp);
    lowTemp = Math.floor(lowTemp);
    highTemp = Math.floor(highTemp);
    feel = Math.floor(feel);
    const daySpan = createContainer('span', 'day');
    const timeSpan = createContainer('span', 'time');
    const lhSpan = createContainer('span', 'low-high');
    const tempSpan = createContainer('span', 'temp');
    const feelSpan = createContainer('span', 'feel');

    daySpan.textContent = format(date, 'EEEE');
    timeSpan.textContent = format(date, 'h:mmaaa');
    lhSpan.textContent = `H:${highTemp}${degree} L:${lowTemp}${degree}`;
    tempSpan.textContent = `${temp}${degree}`;
    feelSpan.textContent = `Feels like: ${feel}${degree}`;

    addChildren($smallDetail, [daySpan, timeSpan, lhSpan, tempSpan, feelSpan]);
  };

  const _createCurrWeather = (conditionID, condition) => {
    removeChildren($currWeather);
    const icon = createContainer('i', `wi wi-owm-${conditionID}`);
    const conditionSpan = createContainer('span', 'condition');
    conditionSpan.textContent = condition;
    addChildren($currWeather, [icon, conditionSpan]);
  };

  const _createHourlyForecast = (data) => {
    const TOTAL_CARDS = 11;
    removeChildren($hourly);
    const createCard = ({date, iconID, condition, temp, precipitationChance}) => {
      const timeSpan = createContainer('span');
      const icon = createContainer('span', `wi wi-owm-${iconID}`);
      const conditionSpan = createContainer('span', 'condition');
      const tempSpan = createContainer('span', 'temp');
      const rainSpan = createContainer('span', 'rain');

      timeSpan.textContent = format(date, 'h:mmaaa');
      conditionSpan.textContent = condition;
      tempSpan.textContent = `${temp}${degree}`;

      if (precipitationChance) {
        const chance = Math.floor(precipitationChance * 100);
        const raindropIcon = createContainer('i', 'wi wi-raindrop');
        rainSpan.appendChild(raindropIcon);
        rainSpan.textContent = `${chance}%`;
      }
      return createContainer('div', 'card', [timeSpan, icon, conditionSpan, tempSpan, rainSpan]);
    };

    const cardArr = [];
    for (let i = 1; i <= TOTAL_CARDS; i++) {
      const {dt, temp, weather, pop} = data[i];
      const date = fromUnixTime(dt);
      const iconID = weather[0]?.id;
      const condition = weather[0]?.description;
      cardArr.push(createCard({date, temp, iconID, condition, precipitationChance: pop}));
    }

    addChildren($hourly, cardArr);
  };

  const _render = () => {
    const currWeather = Weather.data.current;
    const date = fromUnixTime(currWeather.dt);
    const daily = Weather.data.daily;
    const todayMinTemp = daily[0].temp.min;
    const todayMaxTemp = daily[0].temp.max;
    const iconID = currWeather.weather[0].id;
    const condition = currWeather.weather[0].description;

    _createLocation(Weather.name, date);
    _createSmallDetail(date, currWeather.temp, todayMinTemp, todayMaxTemp, currWeather.feels_like);
    _createCurrWeather(iconID, condition);
    _createHourlyForecast(Weather.data.hourly);
  };

  const setData = (newWeather) => {
    Weather = newWeather;
    _render();
  };

  _render();

  return {
    setData,
  };
};

export default ForecastUI;
