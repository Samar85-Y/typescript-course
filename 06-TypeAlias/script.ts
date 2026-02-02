type Addable = number | string;

function add(arg1: Addable, arg2: Addable): Addable{
  if(typeof arg1 === "number" && typeof arg2 === "number"){
    return arg1 + arg2;
  } else if(typeof arg1 === "string" && typeof arg2 === "string"){
    return arg1 + " " + arg2;
  } else 
  {
      return "Falsche Datentype";
  }
  
} 


const a1 = 'Samar';
const a2 = 'Yousef';

const r1 = add(a1,a2);

console.log(r1);

const a3 = 35;
const a4 = 7;
const r2 = add(a3,a4);

console.log(r2);


const a5 = 'Sabine';
const a6 = [7];
const r3 = add(a5,a6);

console.log(r3);