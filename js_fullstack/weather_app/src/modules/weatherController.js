import {getPreviousDayDT, handleError} from '../helpers/helper';

const FREE = '17c0775075508ec49f2913ca7f02bf44';
const GEOCODING_URL = `http://api.openweathermap.org/geo/1.0/direct?appid=${FREE}`;
const ONE_CALL_URL = `https://api.openweathermap.org/data/2.5/onecall?appid=${FREE}&units=metric`;
const ONE_CALL_HIST_URL = `https://api.openweathermap.org/data/2.5/onecall/timemachine?appid=${FREE}&units=metric`;

const WeatherController = (() => {
  const geocodeUnsafe = async (q, limit = 5) => {
    if (!q) return;
    let url = GEOCODING_URL;
    url += `&limit=${limit}`;
    url += `&q=${q}`;

    const dataResponse = await fetch(url, {mode: 'cors'});
    const {name, country, state} = await dataResponse.json();

    return {name, country, state, lat, lon};
  };

  const getDataUnsafe = async (lat, lon, units = 'metric', exclude = 'minutely,alerts') => {
    if (!lat || !lon) return;
    const url = `${ONE_CALL_URL}&lat=${lat}&lon=${lon}&units=${units}&exclude=${exclude}`;
    let dataResponse = await fetch(url, {mode: 'cors'});
    const currData = await dataResponse.json();

    const histURL = `${ONE_CALL_HIST_URL}&lat=${lat}&lon=${lon}&units=${units}&dt=${getPreviousDayDT()}`;
    dataResponse = await fetch(histURL, {mode: 'cors'});
    const histData = await dataResponse.json();

    const data = Object.assign({}, currData, {previous: histData});
    return data;
  };

  return {
    geocode: handleError(geocodeUnsafe),
    getData: handleError(getDataUnsafe),
  };
})();

export default WeatherController;
