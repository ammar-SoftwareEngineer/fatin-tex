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

  // Do not localize absolute external URLs, anchors, mailto or tel links
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path === "#" ||
    path.startsWith("#")
  ) {
    return path;
  }

  // Ensure path starts with a single leading slash
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  // If already localized with the same locale, return as-is
  if (normalizedPath === `/${locale}` || normalizedPath.startsWith(`/${locale}/`)) {
    return normalizedPath;
  }

  return `/${locale}${normalizedPath}`;
}
