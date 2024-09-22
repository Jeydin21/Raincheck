import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Skeleton } from "@/components/ui/skeleton";

export default function Dashboard() {
  const router = useRouter();
  const { city } = router.query;
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (city) {
      fetchWeatherData(city);
    }
  }, [city]);

  const fetchWeatherData = async (city) => {
    const API_KEY = "e9932fef01ccc58b35eb088057a50cf2";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const data = await response.json();
    setWeatherData(data);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>SkibidiWeather - {city}</title>
      </Head>
      <div className="text-[#F2F2F2] min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-950">
        <main className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-20 shadow-lg">
            <h1 className="text-5xl md:text-6xl font-extrabold text-glow mb-6">
              {loading ? (
                <Skeleton className="h-20 w-[300px] mb-12" />
              ) : (
                <>
                  Weather in {city}
                </>
              )}
            </h1>
            {loading ? (
              <>
                <Skeleton className="h-6 w-[300px] mb-12" />
                <Skeleton className="h-6 w-[300px] mb-12" />
                <Skeleton className="h-6 w-[300px] mb-12" />
                <Skeleton className="h-6 w-[300px] mb-12" />
              </>
            ) : (
              <>
                <p className="text-lg md:text-xl text-gray-300 mb-12">
                  Description: {weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1)}
                </p>
                <p className="text-lg md:text-xl text-gray-300 mb-12">
                  Temperature: {((weatherData.main.temp - 273.15) * 9/5 + 32).toFixed(2)}°F
                </p>
                <p className="text-lg md:text-xl text-gray-300 mb-12">
                  Humidity: {weatherData.main.humidity}%
                </p>
                <p className="text-lg md:text-xl text-gray-300 mb-12">
                  Wind Speed: {weatherData.wind.speed} m/s
                </p>
                <p className="text-lg md:text-xl text-gray-300 mb-12">
                  Pressure: {weatherData.main.pressure} hPa
                </p>
                <p className="text-lg md:text-xl text-gray-300 mb-12">
                  Visibility: {weatherData.visibility / 1000} km
                </p>
              </>
            )}
          </div>
        </main>
      </div>
    </>
  );
}