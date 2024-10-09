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

const getAirPollution = async (cityName) => {
  try {
    const cityLocation = await getCityLocation(cityName);
    const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${cityLocation[0].lat}&lon=${cityLocation[0].lon}&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not OK: ' + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};

const getCityLocation = async (cityName) => {
  try {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not OK: ' + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};

module.exports = { getOpenWeatherCity, getAirPollution, getCityLocation };