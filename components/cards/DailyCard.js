import { Skeleton } from "@/components/ui/skeleton";
import { HourlyCard } from "@/components/small-components/HourlyCard";

function DailyCard({ dailyData, loading }) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-5 shadow-lg max-h-[50vh] w-full h-full">
      {loading ? (
        <Skeleton className="h-20 w-[300px] mb-12" />
      ) : (
        <>
          <h1 className="md:text-2xl font-extrabold text-glow mb-6">
            Hourly Forecast
          </h1>
          <div className="flex overflow-x-auto select-none">
            {dailyData.hourly.data.map((data, index) => (
              <HourlyCard
                key={index}
                time={data.date}
                icon={data.icon}
                temp={data.temperature}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export { DailyCard };