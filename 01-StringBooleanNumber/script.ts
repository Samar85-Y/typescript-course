function add (arg1:number, arg2:number) {
  return arg1 + arg2;
}
function concat (arg1:string, arg2:string) {
  return arg1 + arg2;
}
function check(arg: number): boolean {
  if( arg > 2) {
    return false;
  }
  return true;
}

const a1 = 2;
const a2 = 5;

console.log(add(a1, a2));

const a3 = 'Jörg';
const a4 = ' Aderhold';

console.log(concat(a3, a4));

const a5 = 2;
console.log(check(a5));
