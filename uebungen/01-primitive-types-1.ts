// 01-primitive-types-1.ts
/**
 * Ziel: Grundtypen sicher anwenden + kleine Utility-Funktionen.
 *
 * Aufgaben:
 * 1) Implementiere `toEuro()`:
 *    - Input: amount (number), currencySymbol (string, default "€")
 *    - Output: string im Format "12.34 €"
 *    - Runden auf 2 Nachkommastellen.
 *
 * 2) Implementiere `isAdult()`:
 *    - Input: age (number)
 *    - Output: boolean (true ab 18)
 *
 * 3) Implementiere `normalizeName()`:
 *    - Input: name (string)
 *    - Output: string getrimmt, mehrere Leerzeichen -> eins, erstes Zeichen groß.
 */

export function toEuro(amount: number, currencySymbol: string = "€"): string {
  return "";
}

export function isAdult(age: number): boolean {
  // TODO
  return false;
}

export function normalizeName(name: string): string {
  // TODO
  return "";
}

// Mini-Checks (sollten später true sein)
// console.log(toEuro(12) === "12.00 €");
// console.log(isAdult(18) === true);
// console.log(normalizeName("  jörg   aderhold ") === "Jörg aderhold");
