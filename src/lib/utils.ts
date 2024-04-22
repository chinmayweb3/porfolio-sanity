import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const proUrl =
  process.env.NODE_ENV === "production"
    ? "https://chinmayport.pages.dev"
    : "http://localhost:3000";
