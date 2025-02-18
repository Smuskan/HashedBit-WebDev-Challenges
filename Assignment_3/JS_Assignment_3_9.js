//**********************************
// Author: Muskan Shaikh
//**********************************


// Q9) Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
    // Split the paragraph into words using space as the separator and filter out empty strings
    let words = paragraph.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length;
}

// Example usage
let paragraph = "This is a sample paragraph containing several words.";
let wordCount = countWords(paragraph);
console.log(wordCount); // Output: 8