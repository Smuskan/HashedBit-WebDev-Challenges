//**********************************
// Author: Muskan Shaikh
//***********************************
// Function to calculate tax based on salary using switch case
// Tax rates:
// - 0% for salary between 0 and 500000
// - 10% for salary between 500001 and 1000000
// - 20% for salary between 1000001 and 1500000
// - 30% for salary above 1500000


function findTax(salary) {
    let tax = 0;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            tax = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.1;
            break;
        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.2;
            break;
        case (salary > 1500000):
            tax = salary * 0.3;
            break;
        default:
            return "Invalid salary input";
    }

    return tax;
}

// Example usage:
console.log(findTax(400000)); // Output: 0
console.log(findTax(700000)); // Output: 70000
console.log(findTax(1200000)); // Output: 240000
console.log(findTax(2000000)); // Output: 600000