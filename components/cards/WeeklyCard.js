import { Skeleton } from "@/components/ui/skeleton";
import { DailyCard } from "@/components/small-components/DailyCard";

function WeeklyCard({ weeklyData, loading }) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-5 shadow-lg lg:max-h-[50vh] w-full h-full overflow-hidden">
      {loading ? (
        <Skeleton className="h-20 w-[300px] mb-12" />
      ) : (
        <>
            <h1 className="md:text-2xl font-extrabold text-glow mb-1">
              Weekly Forecast
            </h1>
          <div className="flex flex-col overflow-y-auto select-none h-full w-full pb-5">
            {weeklyData.daily.data.map((data, index) => (
              <DailyCard
                key={index}
                date={data.day}
                icon={data.icon}
                highTemp={data.all_day.temperature_max}
                lowTemp={data.all_day.temperature_min}
                summary={data.summary}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export { WeeklyCard };