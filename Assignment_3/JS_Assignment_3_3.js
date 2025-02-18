//**********************************
// Author: Muskan Shaikh
//**********************************

// Q3) let string = 'INDIA'
// output = 'INDONESIA'

let str = 'INDIA';
let arr = str.split(''); // Convert string to an array of characters

arr.splice(2, 3, 'O', 'N', 'E', 'S', 'I', 'A'); // Replace 'DIA' with 'ONESIA'

let output = arr.join(''); // Join the array back to a string
console.log(output); // Output: 'INDONESIA'