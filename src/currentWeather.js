require('dotenv').config();
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const baseURL = `https://api.openweathermap.org/data/2.5/weather`;

const getWeatherCity = async (cityName) => {
  try {
    const response = await fetch(`${baseURL}?q=${cityName}&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not OK: ' + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};

module.exports = { getWeatherCity };