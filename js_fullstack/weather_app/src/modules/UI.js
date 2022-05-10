import Weather from './weather';
import WeatherController from './weatherController';
import ForecastUI from './ForecastUI';
import DailyUI from './DailyUI';

const $searchBar = document.querySelector('header .search');
const $tempUnitToggle = document.querySelector('header .btn-container');

let forecast;
let daily;

const search = async () => {
  const searchInput = $searchBar.firstElementChild;
  const results = await WeatherController.geocode(searchInput.value);
  const {name, country, lat, lon} = results.data[0];
  const data = await WeatherController.getData(lat, lon);

  const weather = Weather(name, country, data);
  forecast = forecast ? forecast.setWeather(weather) : ForecastUI(weather);
  daily = daily ? daily.setWeather(weather) : DailyUI(weather);

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
      console.log(data);
      const newWeather = Weather(name, country, data);

      forecast = ForecastUI(newWeather);
      daily = DailyUI(newWeather);
    });
  }else{

  }
};

export default main;
