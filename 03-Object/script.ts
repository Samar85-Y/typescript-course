let arr = [1, 2, 3, 4, 5, 6];
console.log(arr);

function printArray(arr: number[]) {
  console.log(arr);
}

printArray(arr);
printArray([27]);

let tpl: [number, number, string, number] = [27, 3, 'Martin', 5];

function printTuple(tpl: [number, number, string, number]) {
  console.log(tpl);
}

printTuple(tpl);