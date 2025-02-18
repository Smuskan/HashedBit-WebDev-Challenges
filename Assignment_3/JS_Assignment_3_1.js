//**********************************
// Author: Muskan Shaikh
//**********************************

// Q1) Create an array of states in India.
//     Remove all the names starting with vowels from the list using array.filter().

const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal"
];

// Function to remove states starting with vowels (A, E, I, O, U)
const filteredStates = states.filter(state => !/^[AEIOU]/i.test(state));

// Output the filtered list
console.log(filteredStates);