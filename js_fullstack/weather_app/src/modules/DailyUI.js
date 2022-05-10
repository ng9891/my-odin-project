import {removeChildren, createContainer, degree} from '../helpers/helper';
import {fromUnixTime, format} from 'date-fns';

const DailyUI = (Weather) => {
  const $daily = document.querySelector('main .daily');
  const _createDaily = (data) => {
    removeChildren($daily);

    for (const {dt, weather, temp, pop} of data) {
      // {dt, weather, temp, pop}
      const daySpan = createContainer('span');
      const icon = createContainer('i', `wi wi-owm-${weather[0].id}`);
      const conditionSpan = createContainer('span');
      const popSpan = createContainer('span');
      const tempSpan = createContainer('span');

      daySpan.textContent = dt === 'Yesterday' ? 'Yesterday' : format(fromUnixTime(dt), 'EEEE');
      conditionSpan.textContent = weather[0].main;
      popSpan.textContent = pop ? `${Math.floor(pop * 100)}%` : ' ';
      tempSpan.textContent = `${Math.floor(temp.max ? temp.max : temp)}${degree}`;

      const div = createContainer('div', 'card', [daySpan, icon, conditionSpan, tempSpan]);
      $daily.append(div);
    }
  };

  const _render = () => {
    const data = Weather.data.daily;
    const yesterday = Weather.data.previous.current;
    yesterday.dt = 'Yesterday';
    data.unshift(yesterday);
    _createDaily(data);

    console.log(data);
  };

  const setWeather = (newWeather) => {
    Weather = newWeather;
    _render();
  };

  _render();
  return {
    setWeather,
  };
};

export default DailyUI;
