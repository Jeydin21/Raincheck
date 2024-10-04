import { Skeleton } from "@/components/ui/skeleton";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { HourlyCard } from "@/components/small-components/HourlyCard";
import { formatTime } from "@/lib/utils";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function DailyCard({ dailyData, loading }) {
  if (!dailyData || !dailyData.hourly) {
    return <Skeleton className="h-20 w-[300px] mb-12" />;
  }

  const chartData = {
    labels: dailyData.hourly.data.map((data) => new Date(data.date).toLocaleTimeString([], { hour: '2-digit' })),
    datasets: [
      {
        label: "Temperature",
        data: dailyData.hourly.data.map((data) => data.temperature),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "#F2F2F2 ",
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "Temperature Over Time",
      },
    },
  };

  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-5 shadow-lg w-full h-full overflow-hidden">
      {loading ? (
        <Skeleton className="h-20 w-[300px] mb-12" />
      ) : (
        <>
          <h1 className="md:text-2xl font-extrabold text-glow mb-1">
            Hourly Forecast
          </h1>
          <div className="w-full h-52">
            <Line data={chartData} options={chartOptions} />
          </div>
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