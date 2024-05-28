// write a function that takes in a astring and returns the number of vowels in the string
function FindVowels(inputString) {
    var numberOfVowels = 0;
    for (var _i = 0, inputString_1 = inputString; _i < inputString_1.length; _i++) {
        var char = inputString_1[_i];
        var vowels = ["a", "e", "i", "o", "u"];
        var hasString = vowels.includes(char);
        if (hasString === true) {
            numberOfVowels += 1;
        }
    }
    return numberOfVowels;
}
console.log(FindVowels("asdsse"));
