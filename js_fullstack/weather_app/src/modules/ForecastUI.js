import {format, fromUnixTime} from 'date-fns';
import {removeChildren, createContainer, addChildren, celsiusToFahrenheit, degree} from '../helpers/helper';

const ForecastUI = (Weather) => {
  let tempUnit = 'c';
  let tz = Weather?.data?.timezone;
  const $location = document.querySelector('.forecast .location');
  const $smallDetail = document.querySelector('.forecast .small-details');
  const $currWeather = document.querySelector('.forecast .weather');
  const $hourly = document.querySelector('.forecast .hourly');
  const $details = document.querySelector('main .details');

  const _createLocation = (city, country,date) => {
    removeChildren($location);
    const citySpan = createContainer('span', 'city');
    const dateSpan = createContainer('span', 'date');

    citySpan.textContent = `${city}, ${country}`;
    dateSpan.textContent = format(date, 'd MMMM yyyy');
    addChildren($location, [citySpan, dateSpan]);
  };

  const _createSmallDetail = (date, temp, lowTemp, highTemp, feel) => {
    removeChildren($smallDetail);
    if (tempUnit === 'f') {
      temp = Math.floor(celsiusToFahrenheit(temp));
      lowTemp = Math.floor(celsiusToFahrenheit(lowTemp));
      highTemp = Math.floor(celsiusToFahrenheit(highTemp));
      feel = Math.floor(celsiusToFahrenheit(feel));
    } else {
      temp = Math.floor(temp);
      lowTemp = Math.floor(lowTemp);
      highTemp = Math.floor(highTemp);
      feel = Math.floor(feel);
    }

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
      const icon = createContainer('i', `wi wi-owm-${iconID}`);
      const conditionSpan = createContainer('span', 'condition');
      const tempSpan = createContainer('span', 'temp');
      const rainSpan = createContainer('span', 'rain');

      timeSpan.textContent = format(date, 'h:mmaaa');
      conditionSpan.textContent = condition;
      let newTemp = temp;
      if (tempUnit === 'f') newTemp = celsiusToFahrenheit(temp);
      tempSpan.textContent = `${Math.floor(newTemp)}${degree}`;

      if (precipitationChance) {
        const chance = Math.floor(precipitationChance * 100);
        const raindropIcon = createContainer('i', 'wi wi-raindrop');
        rainSpan.textContent = `${chance}%`;
        rainSpan.prepend(raindropIcon);
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

  const _createDetails = (data, pop) => {
    removeChildren($details);
    const addCard = (key, value) => {
      const titleSpan = createContainer('span');
      const infoSpan = createContainer('span');
      titleSpan.textContent = key;
      infoSpan.textContent = value;
      const container = createContainer('div', 'info', [titleSpan, infoSpan]);
      $details.appendChild(container);
    };

    const {sunrise, sunset, humidity, pressure, visibility, wind_speed, wind_deg, rain, snow, uvi} = data;
    let precipitation = '0mm';
    let chance = '0%';
    if (rain) {
      precipitation = `${rain['1h']}mm`;
      chance = ` ${pop * 100}%`;
    } else if (snow) {
      precipitation = `${snow['1h']}mm`;
      chance = `${pop * 100}%`;
    }
    const detailObj = {
      sunrise: format(fromUnixTime(sunrise), 'h:mmaaa'),
      sunset: format(fromUnixTime(sunset), 'h:mmaaa'),
      ['Precipitation chance']: chance,
      ['Precipitation']: precipitation,
      humidity: `${humidity}%`,
      visibility: `${Math.floor(visibility / 1000)} km`,
      pressure: `${pressure} hPa`,
      ['wind']: `${wind_speed}m/s ${wind_deg}${degree}`,
      ['UV Index']: uvi,
    };

    for (const [key, val] of Object.entries(detailObj)) {
      addCard(key, val);
    }
  };

  const _render = () => {
    const currWeather = Weather.data.current;
    const date = fromUnixTime(currWeather.dt);
    const daily = Weather.data.daily;
    const todayMinTemp = daily[0].temp.min;
    const todayMaxTemp = daily[0].temp.max;
    const iconID = currWeather.weather[0].id;
    const condition = currWeather.weather[0].description;
    const chanceOfPrecipitation = Weather.data.hourly[0].pop;

    _createLocation(Weather.name, Weather.country, date);
    _createSmallDetail(date, currWeather.temp, todayMinTemp, todayMaxTemp, currWeather.feels_like);
    _createCurrWeather(iconID, condition);
    _createHourlyForecast(Weather.data.hourly);
    _createDetails(currWeather, chanceOfPrecipitation);
  };

  const setWeather = (newWeather) => {
    Weather = newWeather;
    tz = Weather?.data?.timezone;
    _render();
  };

  const toggleCelsius = () => {
    tempUnit = tempUnit === 'c' ? 'f' : 'c';
    _render();
  };

  _render();

  return {
    setWeather,
    toggleCelsius,
  };
};

export default ForecastUI;
