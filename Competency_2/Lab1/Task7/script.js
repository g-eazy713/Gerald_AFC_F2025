// script.js
// Name: Gerald Durrance
// Task7 - Grade Classification

// Step 1: Create an arrow function named classifyGrade.
// Arrow functions are a compact way to write functions in JavaScript.
// This function takes in one value (grade) and returns a letter grade (A, B, C, D, or F).
const classifyGrade = (grade) =>
    // Step 2: Use ternary operators to classify the grade.
    // A ternary operator is a short way of writing "if...else" statements.
// Format: (condition) ? valueIfTrue : valueIfFalse
// Here we chain multiple ternary checks so the grade is matched against different ranges:
// - If grade is 90 or higher → "A"
// - Else if grade is 80 or higher → "B"
// - Else if grade is 70 or higher → "C"
// - Else if grade is 60 or higher → "D"
// - Otherwise (anything below 60) → "F"
    (grade >= 90) ? "A" :
        (grade >= 80) ? "B" :
            (grade >= 70) ? "C" :
                (grade >= 60) ? "D" :
                    "F";

// Step 3: Ask the user to type in a grade.
// The prompt() function shows a popup box where the user can enter text.
// For example, the user might type "85".
const input = prompt("Enter a grade (0-100):");

// Step 4: Convert the input (which is text) into a number.
// Without this, JavaScript would treat "85" as text instead of a numeric value.
const grade = Number(input);

// Step 5: Check if the input is a valid number.
// Number.isNaN(grade) means: if the user typed something that isn’t a number (like "hello"),
// then grade will become NaN (Not a Number). If that happens, show an error.
if (Number.isNaN(grade)) {
    console.log("Error: Please enter a valid number.");
} else {
    // Step 6: If the input is valid, call the classifyGrade function.
    // This will return a letter grade (A, B, C, D, or F) based on the number entered.
    const classification = classifyGrade(grade);

    // Show the result in the console.
    console.log("The grade classification is:", classification);
}
