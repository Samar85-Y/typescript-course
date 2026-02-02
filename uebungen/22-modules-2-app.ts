// 22-modules-2-app.ts
/**
 * Aufgaben:
 * 1) Importiere aus "./22-modules-1-math"
 * 2) Nutze clamp + round2 für eine kleine Demo:
 *    - price = 12.987 -> round2
 *    - rating = 7 -> clamp auf 0..5
 */

import { clamp, round2 } from "./22-modules-1-math";

const price = round2(12.987);
const rating = clamp(7, 0, 5);

console.log(price);
console.log(rating);
