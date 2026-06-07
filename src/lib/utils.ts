import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function localizePath(
  path: string,
  locale?: string
) {
  if (!locale) return path;

  return `/${locale}${path}`;
}
