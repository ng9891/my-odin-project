import Weather from './weather';
import WeatherController from './weatherController';
import ForecastUI from './ForecastUI';

const main = () => {
  const degree = '°';
  const lat = 40.73061;
  const lon = -73.935242;

  // const data = await weatherController.getData(lat, lon)
  // localStorage.setItem('weather', JSON.stringify(data));

  const data = JSON.parse(localStorage.getItem('weather'));

  const weather = Weather('New York City', 'United States', data);

  const forecast = ForecastUI(weather);

  console.log(data);
};

export default main;
