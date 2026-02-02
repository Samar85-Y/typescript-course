// 21-oop-abstract-1.ts
/**
 * Aufgaben:
 * 1) Abstract class `Shape` mit abstract area(): number
 * 2) Klassen `Circle`, `Square` erben und implementieren area()
 * 3) Funktion `totalArea(shapes: Shape[]): number`
 */

export abstract class Shape {
  abstract area(): number;
}

export class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  area(): number {
    // TODO
    return 0;
  }
}

export class Square extends Shape {
  constructor(public size: number) {
    super();
  }

  area(): number {
    // TODO
    return 0;
  }
}

export function totalArea(shapes: Shape[]): number {
  // TODO
  return 0;
}
