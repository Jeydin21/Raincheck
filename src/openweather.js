require('dotenv').config();
const API_KEY = process.env.NEXT_PUBLIC_ACCUWEATHER_API_KEY;
const baseURL = `https://api.openweathermap.org`;

const getOpenWeatherCity = async (cityName) => {
  try {
    const response = await fetch(`${baseURL}/data/2.5/weather?q=${cityName}&units=imperial&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not OK: ' + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};

const getOpenWeatherMap = async (longitude, latitude) => {
  try {
    const response = await fetch(`${baseURL}/maps/2.0/weather/PR0/8/${longitude}/${latitude}?appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not OK: ' + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

module.exports = { getOpenWeatherCity, getOpenWeatherMap };