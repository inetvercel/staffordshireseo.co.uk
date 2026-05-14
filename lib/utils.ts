import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalise(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function slugToTitle(slug: string) {
  return slug
    .split("-")
    .map((word) => capitalise(word))
    .join(" ");
}
