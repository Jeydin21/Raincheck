// meteosource.js
require('dotenv').config();
const API_KEY = process.env.NEXT_PUBLIC_METEOSOURCE_API_KEY;
const baseURL = `https://www.meteosource.com/api/v1/free`;

/* Sections:
current: Current weather situation
daily: Forecasts for each whole day, without the daily parts
daily-parts: Forecasts for each whole day, morning, afternoon and evening
hourly: Forecasts for each hour
minutely: Forecasts for each minute
alerts: Weather alerts
all: All the above sections
*/


const getWeatherCity = async (cityId, sections) => {
  try {
    const response = await fetch(`${baseURL}/point?place_id=${cityId}&sections=${sections}&timezone=auto&language=en&units=us&key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not OK: ' + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};

const getLocations = async (query) => {
  try {
    const response = await fetch(`${baseURL}/find_places?text=${query}&key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not OK: ' + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};

module.exports = { getWeatherCity, getLocations };