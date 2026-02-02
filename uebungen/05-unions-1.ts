// 05-unions-1.ts
/**
 * Aufgaben:
 * 1) Definiere `type Id = string | number`.
 * 2) Implementiere `toIdString(id)`:
 *    - number -> "n:<id>"
 *    - string -> "s:<id>"
 * 3) Implementiere `parseId(input)`:
 *    - Input: string
 *    - Output: Id
 *    - Wenn nur Ziffern -> number, sonst string
 */

export type Id = string | number;

export function toIdString(id: Id): string {
  // TODO
  return "";
}

export function parseId(input: string): Id {
  // TODO
  return input;
}

console.log(toIdString(7) === "n:7");
console.log(toIdString("abc") === "s:abc");
console.log(parseId("007") === 7);
console.log(parseId("a7") === "a7");
