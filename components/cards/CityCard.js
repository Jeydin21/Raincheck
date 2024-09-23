import { Skeleton } from "@/components/ui/skeleton";

function CityCard({ weatherData, loading }) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-5 shadow-lg m-5">
      <h1 className="text-5xl md:text-6xl font-extrabold text-glow mb-6">
        {loading ? (
          <Skeleton className="h-20 w-[300px] mb-12" />
        ) : (
          <>{weatherData.name}</>
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
          <p className="text-lg md:text-4xl text-gray-300 mb-12">
              <img 
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
                alt={weatherData.weather[0].description} 
                className="inline-block w-12 h-12" 
              />
              {((weatherData.main.temp - 273.15) * 9 / 5 + 32).toFixed(0)}°F
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12">
            Description: {weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1)}
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
  )
}

export { CityCard };