// 12-generic-functions-1.ts
/**
 * Aufgaben:
 * 1) Implementiere `first<T>(items: T[]): T | undefined`
 * 2) Implementiere `mapTo<T, R>(items: T[], fn: (x: T) => R): R[]`
 */

export function first<T>(items: T[]): T | undefined {
  return items.length > 0 ? items[0] : undefined;
}

export function mapTo<T, R>(items: T[], fn: (x: T) => R): R[] {
  const result: R[] = [];
  for (const item of items) {
    result.push(fn(item));
  }
  return result;
}


console.log(first([10, 20]) === 10);
console.log(mapTo([1, 2], n => `${n}`).join(",") === "1,2");
