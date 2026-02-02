// 13-generic-constraints-1.ts
/**
 * Aufgaben:
 * 1) Implementiere `pluck<T, K extends keyof T>(obj: T, key: K): T[K]`
 * 2) Implementiere `hasId<T extends { id: string }>(x: T): string`
 */

export function pluck<T, K extends keyof T>(obj: T, key: K): T[K] {
  // TODO
  return obj[key];
}

export function hasId<T extends { id: string }>(x: T): string {
  // TODO
  return x.id;
}

console.log(pluck({ a: 1, b: "x" }, "b") === "x");
console.log(hasId({ id: "p1", title: "Test" }) === "p1");
