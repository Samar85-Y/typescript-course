// 08-extending-interfaces-1.ts
/**
 * Aufgaben:
 * 1) `Person` mit: firstName, lastName
 * 2) `Employee` extends Person mit: employeeId, department
 * 3) Implementiere `fullName(p)`
 * 4) Implementiere `employeeLabel(e)` -> "Full Name (#employeeId) - department"
 */

export interface Person {
  firstName: string;
  lastName: string;
}

export interface Employee extends Person {
  employeeId: string;
  department: string;
}

export function fullName(p: Person): string {
  // TODO
  return "";
}

export function employeeLabel(e: Employee): string {
  // TODO
  return "";
}

console.log(employeeLabel({ firstName: "Max", lastName: "Muster", employeeId: "E-7", department: "IT" }) === "Max Muster (#E-7) - IT");
