import Weather from './Weather';
import WeatherController from './WeatherController';
import ForecastUI from './ForecastUI';
import DailyUI from './DailyUI';

const $searchBar = document.querySelector('header .search');
const $tempUnitToggle = document.querySelector('header .btn-container');
const $loadingIcon = document.querySelector('.loading');
const $mainContainer = document.querySelector('main');
const $footerContainer = document.querySelector('footer');

let forecast;
let daily;

const toggleLoading = () => {
  const isActive = $loadingIcon.classList.contains('active');
  if (isActive) {
    $loadingIcon.classList.remove('active');
    $mainContainer.style.display = 'flex';
    $footerContainer.style.display = 'flex';
  } else {
    $loadingIcon.classList.add('active');
    $mainContainer.style.display = 'none';
    $footerContainer.style.display = 'none';
  }
};

const queryData = async ({name, country, lat, lon}) => {
  if (!lat || !lon) return console.error('No lat or lon in queryData');
  const data = await WeatherController.getData(lat, lon);
  const weather = Weather(name, country, data);

  if (!forecast) forecast = ForecastUI(weather);
  else forecast.setWeather(weather);

  if (!daily) daily = DailyUI(weather);
  else daily.setWeather(weather);
};

const geocode = async (place) => {
  if (!place) return console.error('No place specified in geocode');
  const results = await WeatherController.geocode(place);
  if (!results || results.message) {
    alert('No result found for ', place);
    return;
  }
  return results;
};

const reverseGeocode = async (lat, lon) => {
  if (!lat || !lon) return console.error('No lat or lon specified in reverseGeocode');
  const reverse = await WeatherController.reverseGeocode(lat, lon);
  if (!reverse || reverse.message) {
    alert(`No result found for lat:${lat} lon:${lon}`);
    return;
  }
  return reverse;
};

const search = async () => {
  toggleLoading();
  const searchInput = $searchBar.firstElementChild;
  const data = await geocode(searchInput.value);
  const {name, country, lat, lon} = data[0];
  await queryData({name, country, lat, lon});
  toggleLoading();
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
  if (q){
    const data = await geocode(q);
    const {name, country, lat, lon} = data[0];
    await queryData({name, country, lat, lon})
  }
  else {
    const lat = 40.73061;
    const lon = -73.935242;
    const data = await WeatherController.getData(lat, lon);
    const weather = Weather('New York', 'US', data);

    forecast = ForecastUI(weather);
    daily = DailyUI(weather);
  }
  toggleLoading();
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
      const data = await reverseGeocode(lat, lon);
      const {name, country} = data[0];
      await queryData({name, country, lat, lon});
      toggleLoading();
    }, handleDefault);
  } else {
    handleDefault();
  }
};

export default main;
