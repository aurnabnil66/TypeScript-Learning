type MathOperation = (x: number, y: number) => number;

const add: MathOperation = (x, y) => x + y;
const subtract: MathOperation = (x, y) => x - y;

console.log('Addition Result', add(5, 4));
console.log('Subtraction Result', subtract(5, 4));