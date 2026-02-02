// 03-object-1.ts
/**
 * Aufgaben:
 * 1) Lege `type Product` an: { id: string; title: string; priceCents: number; tags?: string[] }
 * 2) Implementiere `priceEuro(product)` -> string "12.34 €"
 * 3) Implementiere `addTag(product, tag)`:
 *    - immutable: gib neues Objekt zurück
 *    - tags sollen unique bleiben
 */

export type Product = {
  id: string;
  title: string;
  priceCents: number;
  tags?: string[];
};

export function priceEuro(p: Product): string {
  // TODO
  return "";
}

export function addTag(p: Product, tag: string): Product {
  // TODO
  return p;
}

const p1: Product = { id: "p1", title: "Karabiner", priceCents: 1299 };
console.log(priceEuro(p1) === "12.99 €");
console.log(addTag(p1, "climbing").tags?.includes("climbing") === true);
