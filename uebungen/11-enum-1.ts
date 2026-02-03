// 11-enum-1.ts
/**
 * Aufgaben:
 * 1) Erstelle enum `OrderStatus` (Draft, Paid, Shipped, Cancelled)
 * 2) Implementiere `canShip(status)`:
 *    - true nur bei Paid
 * 3) Implementiere `nextStatus(status)`:
 *    - Draft -> Paid
 *    - Paid -> Shipped
 *    - sonst bleibt gleich
 */

export enum OrderStatus {
  Draft = "draft",
  Paid = "paid",
  Shipped = "shipped",
  Cancelled = "cancelled",
}

export function canShip(status: OrderStatus): boolean {
  // TODO
  return (status === OrderStatus.Paid) ? true : false;
}

export function nextStatus(status: OrderStatus): OrderStatus {
  // TODO
  switch (status) {
    case OrderStatus.Draft:
      return OrderStatus.Paid;
    case OrderStatus.Paid:
      return OrderStatus.Shipped;
    default:
      return status;
  }
}

console.log(canShip(OrderStatus.Paid) === true);
console.log(nextStatus(OrderStatus.Draft) === OrderStatus.Paid);
