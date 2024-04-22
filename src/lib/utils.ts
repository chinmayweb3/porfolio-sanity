import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const proUrl = (str: string) => {
  if (process.env.NODE_ENV === "production") {
    return process.env["BASE_URL"] + str;
  } else {
    return "http://localhost:3000" + str;
  }
};
