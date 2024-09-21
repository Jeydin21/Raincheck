import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>SkibidiWeather</title>
        <meta name="description" content="Get real-time weather information for any location in the world." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-[#F2F2F2] min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-950">
        <main className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-glow mb-6">
            Welcome to SkibidiWeather
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12">
            Get real-time weather updates for any location worldwide
          </p>

          <div className="flex justify-center mb-8">
            <input
              type="text"
              placeholder="Enter a city name"
              className="px-4 py-2 text-gray-300 bg-gray-800 border border-gray-600 rounded-l-md outline-none focus:ring focus:ring-blue-500 transition duration-200 ease-in-out"
            />
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700  font-semibold rounded-r-md transition duration-200 ease-in-out">
              Check Weather
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-glow text-blue-400 mb-2">Real-Time Data</h3>
              <p className="text-gray-300">
                Fetch live weather data using OpenWeatherMap API
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-glow text-blue-400 mb-2">5-Day Forecast</h3>
              <p className="text-gray-300">
                Plan ahead with our 5-day weather forecast feature
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-glow text-blue-400 mb-2">Location Detection</h3>
              <p className="text-gray-300">
                Get weather info based on your current location instantly
              </p>
            </div>
          </div>
        </main>

        <footer className="w-full py-6 mt-12 text-center text-gray-400">
          <p>&copy; 2024 SkibidiWeather | Built with Next.js and Tailwind CSS</p>
        </footer>
      </div>
    </>
  );
}
