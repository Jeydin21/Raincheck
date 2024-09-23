import { Skeleton } from "@/components/ui/skeleton";
import { capitalizeFirstLetter, degreeToDirection } from "@/lib/utils";

function CityCard({ weatherData, loading }) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-5 shadow-lg m-5 max-h-full">
      <h1 className="text-5xl md:text-6xl font-extrabold text-glow mb-6">
        {loading ? (
          <Skeleton className="h-20 w-[300px] mb-12" />
        ) : (
          <>{`${weatherData.name}, ${weatherData.sys.country}`}</>
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
          <p className="text-lg md:text-4xl text-gray-300 mb-6 flex items-center font-bold">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={capitalizeFirstLetter(weatherData.weather[0].description)}
              className="inline-block w-12 h-12"
            />
            {weatherData.main.temp.toFixed(0)}°F
          </p>
          <p className="text-lg md:text-xl text-gray-300">
            Feels like {weatherData.main.feels_like.toFixed(0)}°F
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            {weatherData.weather.map((desc, index) => (
              <span key={index}>
                {capitalizeFirstLetter(desc.description)}
                {index < weatherData.weather.length - 1 && ', '}
              </span>
            ))}
          </p>
          <div className="flex flex-row space-x-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-5 shadow-lg">
            <div className="flex flex-col justify-center space-y-10">
            <p className="text-lg md:text-xl text-gray-300">
                Coordinates: ({weatherData.coord.lon}, {weatherData.coord.lat})
              </p>
              <p className="text-lg md:text-xl text-gray-300">
                Wind Speed: {weatherData.wind.speed}mph {degreeToDirection(weatherData.wind.deg)}
              </p>
              <p className="text-lg md:text-xl text-gray-300">
                Humidity: {weatherData.main.humidity}%
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-10">
              <p className="text-lg md:text-xl text-gray-300">
                Visibility: {(weatherData.visibility / 1000).toFixed(1)}km
              </p>
              <p className="text-lg md:text-xl text-gray-300">
                Cloud Cover: {weatherData.clouds.all}%
              </p>
              <p className="text-lg md:text-xl text-gray-300">
                Pressure: {weatherData.main.pressure} hPa
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export { CityCard };