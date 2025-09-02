// script.js
// Name: Gerald Durrance
// Task4 - Event Countdown with Date Object

// Step 1: Create a traditional function to calculate days until event
     // This function takes in one piece of information (eventDate) and figures out
    // how many days away that date is from today.
function calculateDaysUntil(eventDate) {

    // Step 2: Get today's date
        // Here, we label the command "today" because we want to get today's date.
        //The "Date()" object is built into JavaScript and automatically knows the current date and time.
    const today = new Date();

    // Step 3: Convert eventDate string into a Date object
        // This function is asking the user for the date of the event (string from user).
        // It is important to ensure both are dates to do date math.
    const event = new Date(eventDate);

    // Step 4: Calculate difference in milliseconds
        //
        //
    const diff = event - today;

    // Step 5: Convert milliseconds into days
        //
        //
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    // Step 6: Return number of days
        // This function will return the top block calculation to the user
    return days;
}

// Step 7: Prompt the user for a date in YYYY-MM-DD format
    //
    //
let eventDate = prompt("Enter event date (YYYY-MM-DD):");

// Step 8: Validate input format using a simple regex
    //
    //
const dateFormat = /^\d{4}-\d{2}-\d{2}$/;

while (!dateFormat.test(eventDate)) {
    eventDate = prompt("Invalid format. Please enter date as YYYY-MM-DD:");
}

// Step 9: Call the function and store result
    //
    //
const daysRemaining = calculateDaysUntil(eventDate);

// Step 10: Log result to the console
    //
    //
console.log("Days until the event:", daysRemaining);