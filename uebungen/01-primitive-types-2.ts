// 01-primitive-types-2.ts
/**
 * Ziel: String/Number/Boolean im Kontext.
 *
 * Aufgaben:
 * 1) Parsen:
 *    Implementiere `parsePrice()`:
 *    - akzeptiere "12.50", "12,50", " 12,50 € "
 *    - gib number zurück (z. B. 12.5)
 *    - bei ungültig: wirf Error
 *
 * 2) Implementiere `formatUserLine()`:
 *    - Input: name (string), age (number), active (boolean)
 *    - Output: "Name (Alter) - aktiv|inaktiv"
 */

export function parsePrice(raw: string): number {
  const cleaned = raw
    .trim()
    .replace("€", "")
    .replace(/\s+/g, "")
    .replace(",", ".");

  const value = Number(cleaned);

  if (Number.isNaN(value)) {
    throw new Error("Invalid price");
  }

  return value;
}

export function formatUserLine(name: string, age: number, active: boolean): string {
  return `${name} (${age}) - ${active ? "aktiv" : "inaktiv"}`;
}


console.log(parsePrice("12,50 €") === 12.5);
console.log(formatUserLine("Mia", 20, false) === "Mia (20) - inaktiv");
