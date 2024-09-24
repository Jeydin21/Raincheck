import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';

import { getWeatherCity } from '@/src/currentWeather';
import { CityCard } from '@/components/cards/CityCard';

import { getForecastCity } from '@/src/forecastWeather';
import { DailyCard } from '@/components/cards/dailyCard';

import { MapCard } from '@/components/cards/MapCard';
import { WeeklyCard } from '@/components/cards/weeklyCard';

export default function Dashboard() {
  const router = useRouter();
  const { city } = router.query;
  const [weatherData, setWeatherData] = useState(null);
  const [dailyData, setDailyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (city) {
      fetchWeatherData(city);
    }
  }, [city]);

  const fetchWeatherData = async (city) => {
    const weatherData = await getWeatherCity(city);
    const dailyData = await getForecastCity(city);
    setWeatherData(weatherData);
    setDailyData(dailyData);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>SkibidiWeather</title>
      </Head>
  
      <div className="text-[#F2F2F2] min-h-screen bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-950">
        <main className="grid grid-cols-2 grid-rows-2 gap-4 h-screen p-4">
          <div className="flex justify-center items-center h-full">
            <CityCard weatherData={weatherData} loading={loading} />
          </div>
          <div className="flex justify-center items-center h-full">
            <MapCard mapData={dailyData} loading={loading} />
          </div>
          <div className="flex justify-center items-center h-full">
            <DailyCard dailyData={weatherData} loading={loading} />
          </div>
          <div className="flex justify-center items-center h-full">
            <WeeklyCard weeklyData={weatherData} loading={loading} />
          </div>
        </main>
      </div>
    </>
  );
}