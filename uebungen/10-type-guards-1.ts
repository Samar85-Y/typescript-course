// 10-type-guards-1.ts
/**
 * Aufgaben:
 * 1) Implementiere User-defined Type Guard `isStringArray(value): value is string[]`
 * 2) Implementiere `joinIfStrings(value)`:
 *    - wenn string[] -> joined mit ","
 *    - sonst -> "invalid"
 */

export function isStringArray(value: unknown): value is string[] {
  // TODO
  return false;
}

export function joinIfStrings(value: unknown): string {
  // TODO
  return "invalid";
}

console.log(joinIfStrings(["a", "b"]) === "a,b");
console.log(joinIfStrings([1, 2]) === "invalid");
