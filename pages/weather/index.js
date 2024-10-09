import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { getOpenWeatherCity, getAirPollution } from '@/src/openweather';
import { getWeatherCity } from '@/src/meteosource';

import { CityCard } from '@/components/cards/CityCard';
import { DailyCard } from '@/components/cards/DailyCard';
import { AirCard } from '@/components/cards/AirCard';
import { WeeklyCard } from '@/components/cards/WeeklyCard';

export default function Dashboard() {
  const router = useRouter();
  const { city } = router.query;
  const [weatherData, setWeatherData] = useState(null);
  const [dailyData, setDailyData] = useState(null);
  const [weeklyData, setWeeklyData] = useState(null);
  const [airData, setAirData] = useState(null);
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
    const airData = await getAirPollution(city);
    setWeatherData(weatherData);
    setDailyData(dailyData);
    setAirData(airData);
    setWeeklyData(weeklyData);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Raincheck ☔</title>
      </Head>

      <div className="text-[#F2F2F2] min-h-screen bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-950">
        <main className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4 h-full lg:h-screen p-4">
          <div className="flex justify-center items-center h-full">
            <CityCard weatherData={weatherData} loading={loading} />
          </div>
          <div className="flex justify-center items-center h-full">
            <AirCard mapData={airData} loading={loading} />
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