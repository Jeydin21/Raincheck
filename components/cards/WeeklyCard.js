import { Skeleton } from "@/components/ui/skeleton";
import { DailyCard } from "@/components/small-components/DailyCard";

function WeeklyCard({ weeklyData, loading }) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-5 shadow-lg max-h-[50vh] w-full h-full">
      {loading ? (
        <Skeleton className="h-20 w-[300px] mb-12" />
      ) : (
        <>
          <h1 className="md:text-2xl font-extrabold text-glow mb-6">
            Weekly Forecast
          </h1>
          <div className="flex overflow-x-auto space-x-4">
            {weeklyData.daily.data.map((data, index) => (
              <DailyCard
                key={index}
                icon={data.icon}
                highTemp={data.all_day.temperature_max}
                lowTemp={data.all_day.temperature_min}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export { WeeklyCard };