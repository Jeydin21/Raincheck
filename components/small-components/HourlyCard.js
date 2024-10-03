import { formatTime } from "@/lib/utils";
import Image from "next/image";

function HourlyCard({ time, icon, temp }) {
  return (
    <div className="w-14 flex flex-col items-center space-y-1 py-2 px-3 m-2 bg-white bg-opacity-20 rounded-lg shadow-md text-nowrap">
      <div className="text-sm font-bold">{formatTime(time)}</div>
      <Image src={`/icons/${icon}.png`} alt="weather icon" width={32} height={32} />
      <div className="text-sm font-bold">{temp.toFixed(0)}°</div>
    </div>
  );
}

export { HourlyCard };