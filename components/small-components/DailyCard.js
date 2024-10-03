import { formatDate } from '@/lib/utils';
import Image from 'next/image';

function DailyCard({ date, icon, highTemp, lowTemp, summary }) {
  return (
    <div className="grid grid-cols-3 items-center px-2 py-1 m-2 bg-white bg-opacity-20 rounded-lg shadow-md">
      <div className="text-sm">{formatDate(date)}</div>
      <div className="flex flex-row items-center space-x-1">
        <Image src={`/icons/${icon}.png`} alt="weather icon" width={32} height={32} />
        <div className="text-sm font-bold">{lowTemp.toFixed(0)}° / {highTemp.toFixed(0)}°</div>
      </div>
      <div className="text-sm line-clamp-1" title={summary}>{summary.split('Temperature')[0]}</div>
    </div>
  );
}

export { DailyCard };