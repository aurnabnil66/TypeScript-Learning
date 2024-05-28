// write a function that takes in a astring and returns the number of vowels in the string


function FindVowels(inputString : string): number {
    let numberOfVowels: number = 0;
    for (const char of inputString) {
      const vowels: string[] = ["a", "e", "i", "o", "u"];
      let hasString : boolean = vowels.includes(char)
      if (hasString === true) {
        numberOfVowels += 1;
      }
    }
    return numberOfVowels;
}

  console.log(FindVowels("asdsse"));