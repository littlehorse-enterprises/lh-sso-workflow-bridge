import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// ... existing code ...
export const isUserAdmin = (arr: string[][], obj: any) => {
  const traverse = (keys: string[], currentObj: any): any => {
    if (!keys.length) return currentObj;

    const [firstKey, ...restKeys] = keys;

    if (firstKey === "*") {
      if (typeof currentObj !== "object" || currentObj === null)
        return undefined;

      return Object.values(currentObj).flatMap((value) =>
        traverse(restKeys, value),
      );
    }

    try {
      return traverse(restKeys, currentObj[firstKey]);
    } catch {
      return undefined;
    }
  };

  const results = arr
    .map((keys) => traverse(keys, obj))
    .filter((result) => result !== undefined);

  for (const result of results) {
    if (Array.isArray(result) && result.includes("lh-user-tasks-admin")) {
      return result;
    }
  }

  return false;
};
// ... existing code ...
