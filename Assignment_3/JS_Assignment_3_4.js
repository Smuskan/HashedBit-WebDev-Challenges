//**********************************
// Author: Muskan Shaikh
//**********************************
// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

let str = "This is a sample string for counting vowels and consonants"; // Example string with more than 20 characters
let vowels = 'aeiouAEIOU';
let consonantsCount = 0;
let vowelsCount = 0;

for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (char >= 'a' && char <= 'z') { // Check if the character is an alphabet
        if (vowels.includes(char)) {
            vowelsCount++;
        } else {
            consonantsCount++;
        }
    }
}

console.log(`Vowels: ${vowelsCount}`); // Output number of vowels
console.log(`Consonants: ${consonantsCount}`); // Output number of consonants