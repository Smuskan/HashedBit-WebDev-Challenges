//**********************************
// Author: Muskan Shaikh
//**********************************

// Q5) Write a function to replace wrong word with correct word in any sentence.
// Like this - correctfn(string, wrong, correct)

function correctfn(string, wrong, correct) {
    // Use the replace function to replace the wrong word with the correct word
    let result = string.replace(new RegExp(`\\b${wrong}\\b`, 'gi'), correct);
    return result;
}

// Example usage
let sentence = "The quik brown fox jumps over the lazy dog";
let wrongWord = "quik";
let correctWord = "quick";

let correctedSentence = correctfn(sentence, wrongWord, correctWord);
console.log(correctedSentence); // Output: "The quick brown fox jumps over the lazy dog"