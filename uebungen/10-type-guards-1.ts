// 10-type-guards-1.ts
/**
 * Aufgaben:
 * 1) Implementiere User-defined Type Guard `isStringArray(value): value is string[]`
 * 2) Implementiere `joinIfStrings(value)`:
 *    - wenn string[] -> joined mit ","
 *    - sonst -> "invalid"
 */

export function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(el => typeof el === "string");
}


export function joinIfStrings(value: unknown): string {
  // TODO
  if (isStringArray(value)) {
    return value.join(",");
  }
  else { return "invalid"; }
}

console.log(joinIfStrings(["a", "b"]) === "a,b");
console.log(joinIfStrings([1, 2]) === "invalid");
