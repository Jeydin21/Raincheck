import { Skeleton } from "@/components/ui/skeleton";

function MapCard({ mapData, loading }) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-5 shadow-lg max-h-[50vh] w-full h-full">
      {loading ? (
        <Skeleton className="h-20 w-[300px] mb-12" />
      ) : (
        <>
          <h1 className="text-5xl md:text-2xl font-extrabold text-glow mb-2">
            Extra Card
          </h1>
          <p className="text-sm">On my life bro I could not figure out how to work the map with OpenWeather API free tier</p>
        </>
      )}
    </div>
  );
}

export { MapCard };