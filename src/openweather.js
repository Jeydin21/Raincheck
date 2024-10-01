require('dotenv').config();
const API_KEY = process.env.NEXT_PUBLIC_ACCUWEATHER_API_KEY;
const baseURL = `https://api.openweathermap.org/data/2.5`;

const getOpenWeatherCity = async (cityName) => {
  try {
    const response = await fetch(`${baseURL}/weather?q=${cityName}&units=imperial&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not OK: ' + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};

const getOpenForecastCity = async (cityName) => {
  try {
    const response = await fetch(`${baseURL}/forecast?q=${cityName}&units=imperial&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not OK: ' + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};

module.exports = { getOpenWeatherCity, getOpenForecastCity };