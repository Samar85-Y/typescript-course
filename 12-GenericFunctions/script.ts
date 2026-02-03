function first<T>(items: T[]): T {
  return items[0];
}


const x = first([1, 2, 3]);
const y = first(['a', 'b']);
console.log(typeof x, typeof y);


function getGenericArray<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}

let numberArray = getGenericArray<number>([10, 20, 30, 40]);

console.log(numberArray);

function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;

}

let returnNumber = identity<number, string>(100, 'Hallo');
console.log(returnNumber);
