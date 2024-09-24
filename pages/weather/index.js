import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { getWeatherCity } from '@/src/currentWeather';
import { CityCard } from '@/components/cards/CityCard';

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
    const data = await getWeatherCity(city);
    setWeatherData(data);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>SkibidiWeather</title>
      </Head>
  
      <div className="text-[#F2F2F2] min-h-screen bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-950">
        <main className="grid grid-cols-2 grid-rows-2 gap-4 h-full p-4">
          <div className="flex justify-center items-center h-full">
            <CityCard weatherData={weatherData} loading={loading} />
          </div>
          <div className="flex justify-center items-center h-full">
            <CityCard weatherData={weatherData} loading={loading} />
          </div>
          <div className="flex justify-center items-center h-full">
            <CityCard weatherData={weatherData} loading={loading} />
          </div>
          <div className="flex justify-center items-center h-full">
            <CityCard weatherData={weatherData} loading={loading} />
          </div>
        </main>
      </div>
    </>
  );
}