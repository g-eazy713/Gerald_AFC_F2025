// script.js
// Name: Gerald Durrance
// Task3 - Favorite Color Selector

// Step 1: Create an array with three colors.
    // An array is a list that can hold multiple values in one variable.
    // The command (let) is used to declare variables in modern JS.
    // Here, the array "colors" contains three strings: "red", "blue", and "green".
let colors = ["red", "blue", "green"];

// Step 2: Define a function named addColor that will add a new color to the list.
    // A function groups instructions together so we can reuse them whenever needed.
    // This function takes one input (called colorArray), which will be the list of colors.
function addColor(colorArray) {

    // Step 3: Ask the user to type in a new color.
        // The prompt() function shows a popup box asking for input.
        // Whatever the user types is saved as the variable "newColor".
    const newColor = prompt("Enter a color to add:");

    // Step 4: Add the new color to the beginning of the array.
         // unshift() is a special array method that inserts a new item at the start of the list.
        // For example: if the array is ["red", "blue", "green"] and the user enters "yellow",
        // the new array will be ["yellow", "red", "blue", "green"].
    colorArray.unshift(newColor);
    // Step 5: Show the updated list of colors in the console.
         // console.log() prints the current state of the array so we can see the result.
    console.log("Updated colors:", colorArray);
}

// Step 6: Call (run) the addColor function and pass in the colors array.
    // This means we are telling the function: "Here’s the list of colors to work with."
    // Once called, the function will ask for a new color, add it to the front of the list,
    // and then display the updated list in the console.
addColor(colors);