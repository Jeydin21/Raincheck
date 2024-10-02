import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function degreeToDirection(deg) {
  const val = Math.floor(deg / 22.5 + 0.5);
  const arr = [
    'N', 'NNE', 'NE', 'ENE',
    'E', 'ESE', 'SE', 'SSE',
    'S', 'SSW', 'SW', 'WSW',
    'W', 'WNW', 'NW', 'NNW'
  ];
  return arr[(val % 16)];
}

export function unixToTime(unix) {
  const date = new Date(unix * 1000);
  return date.toLocaleTimeString();
}

export function formatTime(time) {
  const date = new Date(time);
  return date.toLocaleTimeString([], { hour: 'numeric', hour12: true });
}