// 14-oop-property-modifiers-1.ts
/**
 * Aufgaben:
 * 1) Erstelle Klasse `BankAccount`:
 *    - owner: string (readonly)
 *    - balanceCents: number (private)
 * 2) Methoden:
 *    - deposit(cents)
 *    - withdraw(cents) (Error wenn nicht genug)
 *    - getBalanceEuro(): string
 */

export class BankAccount {
  public readonly owner: string;
  private balanceCents: number;

  constructor(owner: string, initialCents: number = 0) {
    this.owner = owner;
    this.balanceCents = initialCents;
  }

  deposit(cents: number): void {
    // TODO
  }

  withdraw(cents: number): void {
    // TODO
  }

  getBalanceEuro(): string {
    // TODO
    return "";
  }
}
