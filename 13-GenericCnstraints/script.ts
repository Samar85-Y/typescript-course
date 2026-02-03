/**
 * extends heißt in diesem Kontext NICHT vererben - sondern einschränken!!
 * 
 * * Generics sorgen dafür, dass TS sich Typen merkt! any vergisst alles!
 * 
 * *Generics: "Ich weiß nicht, was reinkommt - aber ich garantiere: Das Gleiche kommt wieder raus!"
 */
function getId<T extends { id: string }>(obj: T): string {
  return obj.id;
}

getId({ id: 'x' });
getId({ id: 'x', title: 'Test' });
//getId({title: 'Test'}); //kein ID, Fehler

function firstOrNull<T>(items: T[]): T | null {
  return items.length > 0 ? items[0] : null;
}

const n = firstOrNull([1, 2, 3]);
const s = firstOrNull(['a', 'b']);
const x = firstOrNull([]);


console.log(n, s, x);
