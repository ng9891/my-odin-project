import Weather from './weather';
import WeatherController from './weatherController';

const main = () => {
  const degree = '°';
  const lat = 40.73061;
  const lon = -73.935242;
  console.log('hello world');

  // const data = await weatherController.getData(lat, lon)
  // localStorage.setItem('weather', JSON.stringify(data));

  const data = JSON.parse(localStorage.getItem('weather'));


  console.log(data);
};

export default main;
