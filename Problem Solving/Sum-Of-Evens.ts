// create a function that takes in an array of numbers and returns the sum of all even numbers in the array.

type SumOfAllEvenNumbers = number;

function FindEven(inputNumbers: number[]): SumOfAllEvenNumbers {
  let sumOfAllEvenNumbers: SumOfAllEvenNumbers = 0;
  for (const num of inputNumbers) {
    if (num % 2 === 0) {
        sumOfAllEvenNumbers += num;
    }
  }
  return sumOfAllEvenNumbers;
}

let inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14];

console.log(FindEven(inputNumbers));


