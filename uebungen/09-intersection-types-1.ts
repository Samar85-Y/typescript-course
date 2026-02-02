// 09-intersection-types-1.ts
/**
 * Aufgaben:
 * 1) Definiere:
 *    - WithId = { id: string }
 *    - WithTimestamps = { createdAt: Date; updatedAt: Date }
 *    - Entity = WithId & WithTimestamps
 * 2) Implementiere `touch(entity)` -> updatedAt auf "jetzt" setzen (immutable)
 */

export type WithId = { id: string };
export type WithTimestamps = { createdAt: Date; updatedAt: Date };
export type Entity = WithId & WithTimestamps;

export function touch(e: Entity): Entity {
  // TODO
  return e;
}

const e1: Entity = { id: "x", createdAt: new Date(0), updatedAt: new Date(0) };
const e2 = touch(e1);
console.log(e1.updatedAt.getTime() === 0);
console.log(e2.updatedAt.getTime() !== 0);
