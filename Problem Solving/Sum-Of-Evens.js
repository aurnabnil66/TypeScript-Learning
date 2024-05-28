// create a function that takes in an array of numbers and returns the sum of all even numbers in the array.
function FindEven(inputNumbers) {
    var sumOfAllEvenNumbers = 0;
    for (var _i = 0, inputNumbers_1 = inputNumbers; _i < inputNumbers_1.length; _i++) {
        var num = inputNumbers_1[_i];
        if (num % 2 === 0) {
            sumOfAllEvenNumbers += num;
        }
    }
    return sumOfAllEvenNumbers;
}
var inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14];
console.log(FindEven(inputNumbers));
