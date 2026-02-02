// 15-oop-constructors-1.ts
/**
 * Aufgaben:
 * 1) Klasse `Timer`:
 *    - start: Date
 *    - optional label?: string
 * 2) Methode `elapsedMs(now = new Date())`
 * 3) Bonus: statische Factory `Timer.startNew(label?)`
 */

export class Timer {
  constructor(public start: Date, public label?: string) {}

  elapsedMs(now: Date = new Date()): number {
    // TODO
    return 0;
  }

  static startNew(label?: string): Timer {
    return new Timer(new Date(), label);
  }
}
