import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRoles(obj: any) {
  const splitPaths = process.env.AUTHORITIES?.split(",") ?? [];
  const paths = splitPaths.map((path) => path.split(".").slice(1));

  const roles = paths.flatMap((pathArray) => {
    let current = [obj];
    pathArray.forEach((key) => {
      if (key === "*") {
        current = current.flatMap((item) => {
          if (typeof item === "object" && item !== null) {
            return Object.values(item);
          }
          return [];
        });
      } else {
        current = current.flatMap((item) => item[key]).filter(Boolean);
      }
      if (current.length === 0) return;
    });
    return current;
  });

  return roles;
}
