import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function localizePath(path: string, locale?: string) {
  if (!locale) return path;

  // if already localized (starts with /en, /ar, /tr), return as-is
  if (/^\/(en|ar|tr)(?:$|\/)/.test(path)) return path;

  // normalize root to omit trailing slash
  if (path === "/") return `/${locale}`;

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
}
