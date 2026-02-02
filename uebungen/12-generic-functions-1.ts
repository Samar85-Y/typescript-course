// 12-generic-functions-1.ts
/**
 * Aufgaben:
 * 1) Implementiere `first<T>(items: T[]): T | undefined`
 * 2) Implementiere `mapTo<T, R>(items: T[], fn: (x: T) => R): R[]`
 */

export function first<T>(items: T[]): T | undefined {
  // TODO
  return undefined;
}

export function mapTo<T, R>(items: T[], fn: (x: T) => R): R[] {
  // TODO
  return [];
}

console.log(first([10, 20]) === 10);
console.log(mapTo([1, 2], n => `${n}`).join(",") === "1,2");
