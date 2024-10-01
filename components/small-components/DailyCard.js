// components/cards/TinyWeatherCard.js
function DailyCard({ icon, highTemp, lowTemp }) {
  return (
    <div className="flex flex-col items-center p-2 m-2 bg-white bg-opacity-20 rounded-lg shadow-md">
      <img src={`/icons/${icon}.png`} alt="weather icon" className="w-12 h-12" />
      <div className="text-sm font-bold">{highTemp}°</div>
      <div className="text-sm">{lowTemp}°</div>
    </div>
  );
}

export { DailyCard };