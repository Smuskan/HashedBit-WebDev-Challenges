//**********************************
// Author: Muskan Shaikh
//**********************************

// Q10) Write a function to reverse a string.
// Input - Hello
// Output - olleH

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage
let input = "Hello";
let reversed = reverseString(input);
console.log(reversed); // Output: olleH