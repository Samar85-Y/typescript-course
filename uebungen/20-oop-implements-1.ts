// 20-oop-implements-1.ts
/**
 * Aufgaben:
 * 1) Interface `Serializable` { serialize(): string }
 * 2) Klasse `Note` implements Serializable:
 *    - title, body
 *    - serialize als JSON string
 */

export interface Serializable {
  serialize(): string;
}

export class Note implements Serializable {
  constructor(public title: string, public body: string) {}

  serialize(): string {
    // TODO
    return "";
  }
}

console.log(new Note("A", "B").serialize().includes('"title":"A"') === true);
