import Weather from './Weather';
import WeatherController from './WeatherController';
import ForecastUI from './ForecastUI';
import DailyUI from './DailyUI';

const $searchBar = document.querySelector('header .search');
const $tempUnitToggle = document.querySelector('header .btn-container');

let forecast;
let daily;

const query = async (place) => {
  const results = await WeatherController.geocode(place);
  if (results.length === 0) return alert('No results.');
  const {name, country, lat, lon} = results[0];
  const data = await WeatherController.getData(lat, lon);

  const weather = Weather(name, country, data);

  if (!forecast) forecast = ForecastUI(weather);
  else forecast.setWeather(weather);

  if (!daily) daily = DailyUI(weather);
  else daily.setWeather(weather);
};

const search = () => {
  const searchInput = $searchBar.firstElementChild;
  query(searchInput.value);
};

const handleEnter = (e) => {
  if (e.key === 'Enter') {
    search();
    $searchBar.firstElementChild.blur();
  }
};

const handleUnitChange = (e) => {
  const target = e.target;

  if (target.classList.contains('active')) return;
  forecast.toggleCelsius();
  daily.toggleCelsius();

  const prev = $tempUnitToggle.querySelector('span.active');
  prev.classList.remove('active');
  target.classList.add('active');
};

const handleDefault = async () => {
  const q = localStorage.getItem('lastQuery');
  if (q) query(q);
  else {
    const lat = 40.73061;
    const lon = -73.935242;
    const data = await WeatherController.getData(lat, lon);
    const weather = Weather('New York', 'US', data);

    forecast = ForecastUI(weather);
    daily = DailyUI(weather);
  }
};

const main = () => {
  const searchBtn = $searchBar.lastElementChild;
  searchBtn.addEventListener('click', search);

  const searchInput = $searchBar.firstElementChild;
  searchInput.addEventListener('keydown', handleEnter);

  const $tempUnitBtns = document.querySelectorAll('header .btn-container > span');
  $tempUnitBtns.forEach((el) => el.addEventListener('click', handleUnitChange));

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

      const reverse = await WeatherController.reverseGeocode(lat, lon);
      const {name, country} = reverse[0];
      const data = await WeatherController.getData(lat, lon);
      const newWeather = Weather(name, country, data);

      if (!forecast) forecast = ForecastUI(newWeather);
      else forecast.setWeather(newWeather);

      if (!daily) daily = DailyUI(newWeather);
      else daily.setWeather(newWeather);
    }, handleDefault);
  } else {
    handleDefault();
  }
};

export default main;
