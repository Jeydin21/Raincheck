import { Skeleton } from "@/components/ui/skeleton";
import { capitalizeFirstLetter, degreeToDirection } from "@/lib/utils";
import Image from "next/image";

function CityCard({ weatherData, loading }) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-5 shadow-lg lg:max-h-[50vh] w-full h-full overflow-hidden max-lg:text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-glow mb-6">
        {/* title={`Coordinates: (${weatherData.coord.lon}, ${weatherData.coord.lat})`} */}
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
          <Skeleton className="h-6 w-[300px] mb-12" />
          <Skeleton className="h-6 w-[300px] mb-12" />
        </>
      ) : (
        <>
          <p className="text-lg md:text-4xl text-gray-300 mb-2 flex items-center font-bold max-lg:flex max-lg:justify-center max-lg:items-center">
            <Image
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={capitalizeFirstLetter(weatherData.weather[0].description)}
              width={48}
              height={48}
              className="inline-block"
            />
            {weatherData.main.temp.toFixed(0)}°F
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-lg:text-center">
            {weatherData.weather.map((desc, index) => (
              <span key={index}>
                {capitalizeFirstLetter(desc.description)}
                {index < weatherData.weather.length - 1 && ', '}
              </span>
            ))}
          </p>
          <div className="text-lg md:text-xl flex flex-row space-x-3 text-gray-300 mb-2 max-lg:text-center">
            <div className="text-md text-gray-300">
              H:{weatherData.main.temp_max.toFixed(0)}°
            </div>
            <div className="text-md text-gray-300">
              L:{weatherData.main.temp_min.toFixed(0)}°
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 md:max-lg:grid-cols-3 md:max-lg:grid-rows-2 gap-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-5 shadow-lg">
            <div className="text-md text-gray-300 line-clamp-1">
              Feels Like: {weatherData.main.feels_like.toFixed(0)}°F
            </div>
            <div className="text-md text-gray-300">
              Wind Speed: {weatherData.wind.speed}mph {degreeToDirection(weatherData.wind.deg)}
            </div>
            <div className="text-md text-gray-300">
              Humidity: {weatherData.main.humidity}%
            </div>
            <div className="text-md text-gray-300">
              Visibility: {(weatherData.visibility / 1000).toFixed(1)}km
            </div>
            <div className="text-md text-gray-300">
              Cloud Cover: {weatherData.clouds.all}%
            </div>
            <div className="text-md text-gray-300">
              Pressure: {weatherData.main.pressure} hPa
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export { CityCard };