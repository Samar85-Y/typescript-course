/**
 * any -allgemeinster Typ, es wird kein Type-Checking ausgefuhrt, nie verwenden
 * void - meist bei Ruckgaberwerten von Funktionen
 * null - in TS eher selten anzutreffen
 * 
 * npm run watch
 */

function foo(arg:any): void{
  console.log(arg);
  return;
  
}

let a: number | undefined;
 let b = foo(3);
 console.log(a);
 
 a= undefined;
 