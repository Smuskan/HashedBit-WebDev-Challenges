//**********************************
// Author: Muskan Shaikh
//***********************************

// 4. Function to find the sum of the products of corresponding digits

function sumOfProducts(n1, n2) {
    let str1 = n1.toString().split('').reverse();
    let str2 = n2.toString().split('').reverse();
    let minLength = Math.min(str1.length, str2.length);
    let sum = 0;

    for (let i = 0; i < minLength; i++) {
        sum += parseInt(str1[i]) * parseInt(str2[i]);
    }

    return sum;
}

// Example usage:
console.log(sumOfProducts(6, 34)); // Output: 24
console.log(sumOfProducts(123, 456)); // Output: (3*6) + (2*5) + (1*4) = 38