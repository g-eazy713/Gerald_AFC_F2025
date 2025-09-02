// script.js
// Name: Gerald Durrance
// Task5 - Temperature Classifier

// Step 1: Create a traditional function named classifyTemperature
// first you have to call the function and name it.
function classifyTemperature(celsius)
{
    // Step 2: Convert Celsius into Fahrenheit
    // this is the formula for converting clsius to fahrenheit
    const fahrenheit = (celsius * (9 / 5)) + 32;

    // Step 3: Use conditionals to classify the temperature
    // these booleans will tell the console what to do if it is over 100, over 80, and less than 40.
    // if they dont fall under any of those conditions the console will return "chilly".
    if (fahrenheit > 100) {
        return "Hot";
    } else if (fahrenheit > 80) {
        return "Warm";
    } else if (fahrenheit < 40) {
        return "Cold";
    } else {
        return "Chilly";
    }
}

// Step 4: Prompt the user for a temperature in Celsius
// this is asking the user to put in the temperature in celsius.
// input = the user response.
const input = prompt("Enter temperature in Celsius:");

// Step 5: Convert input into a number
// this step is saying that the number put in by user will equal number
const celsius = Number(input);

// Step 6: Validate the input (must be a number)
// this control is validating that the input from the user is an actual number, if it is not than you will receive an error.
if (Number.isNaN(celsius)) {
    console.log("Error: Please enter a valid number.");
} else {
    // Step 7: Call the function to classify the temperature
    // this will classify the number input as celsius in the system.
    const classification = classifyTemperature(celsius);

    // Step 8: Log the result to the console
    // this function returns the celsius back to the user
    console.log("The temperature is:", classification);
}