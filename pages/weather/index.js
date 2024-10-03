import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { getOpenWeatherCity, getOpenWeatherMap } from '@/src/openweather';
import { getWeatherCity } from '@/src/meteosource';

import { CityCard } from '@/components/cards/CityCard';
import { DailyCard } from '@/components/cards/DailyCard';
import { MapCard } from '@/components/cards/MapCard';
import { WeeklyCard } from '@/components/cards/WeeklyCard';

export default function Dashboard() {
  const router = useRouter();
  const { city } = router.query;
  const [weatherData, setWeatherData] = useState(null);
  const [dailyData, setDailyData] = useState(null);
  const [weeklyData, setWeeklyData] = useState(null);
  const [mapData, setMapData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (city) {
      fetchWeatherData(city);
    }
  }, [city]);

  const fetchWeatherData = async (city) => {
    const weatherData = await getOpenWeatherCity(city);
    const dailyData = await getWeatherCity(city, "hourly");
    const weeklyData = await getWeatherCity(city, "daily");
    setWeatherData(weatherData);
    setDailyData(dailyData);
    setMapData(weatherData.coord.lon, weatherData.coord.lat);
    setWeeklyData(weeklyData);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Raincheck ☔</title>
      </Head>

      <div className="text-[#F2F2F2] min-h-screen bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-950">
        <main className="grid grid-cols-2 grid-rows-2 gap-4 h-screen p-4">
          <div className="flex justify-center items-center h-full">
            <CityCard weatherData={weatherData} loading={loading} />
          </div>
          <div className="flex justify-center items-center h-full">
            <MapCard mapData={mapData} loading={loading} />
          </div>
          <div className="flex justify-center items-center h-full">
            <DailyCard dailyData={dailyData} loading={loading} />
          </div>
          <div className="flex justify-center items-center h-full">
            <WeeklyCard weeklyData={weeklyData} loading={loading} />
          </div>
        </main>
      </div>
    </>
  );
}