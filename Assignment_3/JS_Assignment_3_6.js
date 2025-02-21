//**********************************
// Author: Muskan Shaikh
//**********************************

// Q6) inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// Use array.filter and return numbers greater than 5.

let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

let answer = inputArr.filter(num => num > 5); // Filter numbers greater than 5

console.log(answer); // Output: [9, 10, 7]