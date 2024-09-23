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

      <body className="text-[#F2F2F2] h-screen bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-950">
        <main className="flex flex-row">
          <CityCard weatherData={weatherData} loading={loading} />
        </main>
      </body>
    </>
  );
}