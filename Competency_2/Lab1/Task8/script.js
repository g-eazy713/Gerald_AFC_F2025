// script.js
// Name: Gerald Durrance
// Task8 - Shopping List Operations

// Step 1: Hardcode (pre-define) an array called shoppingList.
// An array is a list that can hold multiple items in one variable.
// Here we start with three items: "eggs", "butter", and "flour".
let shoppingList = ["eggs", "butter", "flour"];

// Step 2: Create an arrow function named modifyItem.
// Functions let us group instructions together so we can reuse them.
// This function takes two inputs:
// - list: the shopping list (array of items)
// - newItem: the new item the user wants to add
const modifyItem = (list, newItem) => {
    // Step 3: Add the new item to the end of the array.
    // push() is a built-in array method that appends an element to the end of the list.
    // Example: ["eggs", "butter", "flour"] → after push("milk") → ["eggs", "butter", "flour", "milk"]
    list.push(newItem);

    // Step 4: Display the updated shopping list in the console.
    // console.log() prints the entire array so the user can see the new item added.
    console.log("Updated shopping list:", list);
};

// Step 5: Ask the user to type in a new item for the shopping list.
// prompt() shows a popup box where the user can enter text.
// For example, the user might type "milk".
const userItem = prompt("Enter a new item to add to the shopping list:");

// Step 6: Validate the input.
// If the user didn’t type anything (empty string, null, etc.), show an error message
// and do not update the list.
if (!userItem) {
    console.log("Error: You must enter a valid item.");
} else {
    // Step 7: If the input is valid, call the modifyItem function.
    // This passes in the shoppingList array and the user’s input.
    // The function will add the item to the list and then display the updated list.
    modifyItem(shoppingList, userItem);
}
