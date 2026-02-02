// 18-oop-static-1.ts
/**
 * Aufgaben:
 * Klasse `IdFactory`:
 * - static counter (start 1)
 * - static next(prefix = "ID"): string => "ID-1", "ID-2", ...
 * - static reset(): void
 */

export class IdFactory {
  private static counter: number = 1;

  static next(prefix: string = "ID"): string {
    // TODO
    return "";
  }

  static reset(): void {
    // TODO
  }
}

IdFactory.reset();
console.log(IdFactory.next("P") === "P-1");
console.log(IdFactory.next("P") === "P-2");
