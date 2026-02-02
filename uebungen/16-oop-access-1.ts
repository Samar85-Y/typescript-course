// 16-oop-access-1.ts
/**
 * Aufgaben:
 * 1) Base-Klasse `LoggerBase`:
 *    - protected prefix: string
 *    - private count: number (wie oft geloggt)
 *    - public log(msg): void -> console.log(`${prefix}${msg}`) und count++
 *    - public getCount(): number
 *
 * 2) Subklasse `TaggedLogger`:
 *    - constructor(tag) setzt prefix: `[tag] `
 */

export class LoggerBase {
  protected prefix: string;
  private count: number = 0;

  constructor(prefix: string = "") {
    this.prefix = prefix;
  }

  log(msg: string): void {
    // TODO
  }

  getCount(): number {
    // TODO
    return 0;
  }
}

export class TaggedLogger extends LoggerBase {
  constructor(tag: string) {
    super(`[${tag}] `);
  }
}
