import { Skeleton } from "@/components/ui/skeleton";

function AirCard({ airData, loading }) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-5 shadow-lg lg:max-h-[50vh] w-full h-full">
      {loading ? (
        <Skeleton className="h-20 w-[300px] mb-12" />
      ) : (
        <>
          <h1 className="md:text-2xl font-extrabold text-glow mb-1">
            Air Quality
          </h1>
          <div className="grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 md:max-lg:grid-cols-3 md:max-lg:grid-rows-2 gap-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-5 shadow-lg">
            {airData?.list.map((data, index) => (
              <>
                <div className="text-sm text-gray-400">{`Air Quality Index: ${data.main.aqi}`}</div>
                <div className="text-sm text-gray-400">CO: {data.components.co} μg/m³</div>
                <div className="text-sm text-gray-400">NO: {data.components.no} μg/m³</div>
                <div className="text-sm text-gray-400">NO₂: {data.components.no2} μg/m³</div>
                <div className="text-sm text-gray-400">O₃: {data.components.o3} μg/m³</div>
                <div className="text-sm text-gray-400">SO₂: {data.components.so2} μg/m³</div>
                <div className="text-sm text-gray-400">PM₂.₅: {data.components.pm2_5} μg/m³</div>
                <div className="text-sm text-gray-400">PM₁₀: {data.components.pm10} μg/m³</div>
              </>
            )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export { AirCard };