// script.js
// Name: Gerald Durrance
// Lab2 - Simple Interest Calculator

// Step 1: Define a function that will calculate the simple interest.
// A function is like a reusable block of code that performs a specific task.
// Here, the function takes three values as input:
// - principal = the original amount of money borrowed or invested
// - rate = the annual interest rate
// - time = the number of years the money is borrowed or invested
// The function then applies the simple interest formula: (Principal × Rate × Time) / 100
// and returns the calculated interest amount.
function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

// Step 2: Ask the user to type in the principal amount (the starting money).
// The prompt() function shows a message box asking the user for input.
// By default, prompt() returns text, so we wrap it in Number() to convert it into a number
// because we will need to do math with it later.
const principal = Number(prompt("Enter the principal amount:"));

// Step 3: Ask the user to type in the annual interest rate (as a percentage).
// Again, we use Number() to make sure the input is treated as a number,
// since math with text wouldn’t work correctly.
const rate = Number(prompt("Enter the rate of interest:"));

// Step 4: Ask the user how long the money will be borrowed or invested in years.
// This is also converted to a number for calculations.
const time = Number(prompt("Enter the time in years:"));

// Step 5: Call (run) the function using the values the user entered.
// The function will calculate the simple interest based on the formula
// and then give us the result. We store that result in a variable called "interest"
// so we can use it later.
const interest = calculateSimpleInterest(principal, rate, time);

// Step 6: Show the result to the user in the console.
// console.log() is a way to print messages to the browser’s developer console.
// This lets the user see the final simple interest that was calculated.
console.log("Your simple interest is:", interest);