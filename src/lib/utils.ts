import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const proUrl = (str: string) => {
  if (process.env.NODE_ENV === "production") {
    return process.env["CF_PAGES_URL"] + str;
    // return "http://localhost:3000" + str;
  } else {
    return "http://localhost:3000" + str;
  }
};
