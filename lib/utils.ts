import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(name: string) {
  const names = name.split(" ");
  const firstName = names[0] || "";
  const lastName = names[names.length - 1] || "";
  return `${firstName[0] || ""}${lastName[0] || ""}`.toUpperCase();
}