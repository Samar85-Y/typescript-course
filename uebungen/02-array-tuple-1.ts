// 02-array-tuple-1.ts
/**
 * Aufgaben:
 * 1) Schreibe `sum()` für number[].
 * 2) Schreibe `unique()` für string[] (Reihenfolge behalten).
 * 3) Schreibe `topN()`:
 *    - Input: numbers: number[], n: number
 *    - Output: neue Liste mit den n größten (absteigend)
 */

export function sum(values: number[]): number {
  // TODO
  return 0;
}

export function unique(values: string[]): string[] {
  // TODO
  return [];
}

export function topN(values: number[], n: number): number[] {
  // TODO
  return [];
}

console.log(sum([1, 2, 3]) === 6);
console.log(unique(["a", "a", "b"]).join(",") === "a,b");
console.log(topN([5, 1, 9, 2], 2).join(",") === "9,5");
