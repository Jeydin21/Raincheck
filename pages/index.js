import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Select from 'react-select';
import { getLocations, getWeatherCity } from '@/src/meteosource';

export default function Home() {
  const [city, setCity] = useState('');
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchLocations = async () => {
      if (inputValue.length > 2) {
        const locations = await getLocations(inputValue);
        const formattedOptions = locations.slice(0, 5).map(location => ({
          value: location.place_id,
          label: `${location.name}, ${location.country}`
        }));
        setOptions(formattedOptions);
      }
    };

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeout = setTimeout(() => {
      fetchLocations();
    }, 500); // Adjust the delay as needed

    setDebounceTimeout(timeout);

    return () => {
      clearTimeout(timeout);
    };
  }, [inputValue, debounceTimeout]);

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  const handleChange = (selectedOption) => {
    setCity(selectedOption);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (city) {
      try {
        const weatherData = await getWeatherCity(city.value, 'current');
        if (weatherData) {
          router.push({
            pathname: '/weather',
            query: { city: city.value }
          });
        } else {
          console.error('Weather data is undefined');
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Raincheck ☔</title>
        <meta name="description" content="Get real-time weather information for any location in the world" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-[#F2F2F2] min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-950">
        <main className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-glow mb-6">
            Welcome to Raincheck ☔
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12">
            Get real-time weather updates for any location worldwide
          </p>

          <form onSubmit={handleSubmit} className="flex justify-center mb-8">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Select
                className="w-full text-black"
                placeholder="Enter a city name..."
                onInputChange={handleInputChange}
                onChange={handleChange}
                options={options}
                isClearable
              />
              <button
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 font-semibold rounded-md transition duration-200 ease-in-out"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mx-5">
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-glow text-blue-400 mb-2">Real-Time Data</h3>
              <p className="text-gray-300">
                Fetch live weather data using OpenWeatherMap API
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-glow text-blue-400 mb-2">5-Day Forecast</h3>
              <p className="text-gray-300">
                Get a 5-day weather forecast for your location
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-glow text-blue-400 mb-2">Modernized User Interface</h3>
              <p className="text-gray-300">
                A sleek and modern UI for a better user experience
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}