function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}

let numbers = [1, 2, 3];
let strings = ["one", "two", "three"];
let boolean = [true, true, false];

const firstNumber = getFirstElement<number>(numbers);
const firstString = getFirstElement<string>(strings);
const firstBoleean = getFirstElement<boolean>(boolean);

[firstNumber, firstString, firstBoleean].forEach((e) => console.log(typeof e));
