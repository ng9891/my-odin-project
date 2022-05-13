import {fromUnixTime, format} from 'date-fns';
import {utcToZonedTime} from 'date-fns-tz';
import {removeChildren, createContainer, celsiusToFahrenheit, degree} from '../helpers/helper';

const DailyUI = (Weather) => {
  let tempUnit = 'c';
  let tz = Weather?.data?.timezone;
  const $daily = document.querySelector('main .daily');
  const _createDaily = (data) => {
    removeChildren($daily);

    for (const {dt, weather, temp} of data) {
      const daySpan = createContainer('span');
      const icon = createContainer('i', `wi wi-owm-${weather[0].id}`);
      const conditionSpan = createContainer('span');
      const tempSpan = createContainer('span');

      daySpan.textContent = dt === 'Yesterday' ? 'Yesterday' : format(utcToZonedTime(fromUnixTime(dt), tz), 'EEEE');
      conditionSpan.textContent = weather[0].main;

      let newTemp = temp.max ? temp.max : temp;
      if (tempUnit === 'f') newTemp = celsiusToFahrenheit(newTemp);
      tempSpan.textContent = `${Math.floor(newTemp)}${degree}`;

      const div = createContainer('div', 'card', [daySpan, icon, conditionSpan, tempSpan]);
      $daily.append(div);
    }
  };

  const _render = () => {
    if(!Weather) return console.error('No Weather Object');
    const data = [...Weather.data.daily];
    const yesterday = Weather.data.previous.current;
    yesterday.dt = 'Yesterday';
    data.unshift(yesterday);
    _createDaily(data);
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

export default DailyUI;
