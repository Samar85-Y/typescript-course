// 07-interfaces-1.ts
/**
 * Aufgaben:
 * 1) Definiere Interface `User`:
 *    - id: string
 *    - name: string
 *    - email?: string
 * 2) Implementiere `displayName(user)`:
 *    - wenn email vorhanden -> "Name <email>"
 *    - sonst -> "Name"
 */

export interface User {
  id: string;
  name: string;
  email?: string;
}

export function displayName(user: User): string {
  // TODO
  return "";
}

console.log(displayName({ id: "u1", name: "Mia" }) === "Mia");
console.log(displayName({ id: "u2", name: "Mia", email: "m@example.com" }) === "Mia <m@example.com>");
