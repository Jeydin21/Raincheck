require('dotenv').config();
const API_KEY = process.env.NEXT_PUBLIC_ACCUWEATHER_API_KEY;
const baseURL = `https://api.openweathermap.org/data/2.5/weather`;

const getWeatherCity = async (cityName) => {
  try {
    const response = await fetch(`${baseURL}?q=${cityName}&units=imperial&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not OK: ' + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};

const newWeatherFunction = async (cityName) => {
  try {
    const response = await fetch(`https://www.meteosource.com/api/v1/free/point?place_id=london&sections=all&timezone=UTC&language=en&units=metric&key=${API_KEY}`);
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