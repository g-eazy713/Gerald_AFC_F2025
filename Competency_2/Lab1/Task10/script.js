// script.js
// Name: Gerald Durrance
// Task10 - How Long Until Graduation

// Step 1: Create an arrow function that gives today’s date and time.
// new Date() creates a Date object that knows the exact current date and time.
const getToday = () => {
    return new Date();
};

// Step 2: Call the function to get today’s date and save it in a variable.
// The "today" variable now holds a Date object for the current day.
const today = getToday();

// Step 3: Find out what day of the week it is.
// getDay() returns a number (0 = Sunday, 1 = Monday, …, 6 = Saturday).
// We use an array of day names to convert that number into a word.
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekday = days[today.getDay()];

// Step 4: Format the date nicely (like "2025, January 21st").
// First, we make an array of month names, so we can turn the month number into a word.
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Extract year, month, and day from the Date object.
const year = today.getFullYear();     // Example: 2025
const month = months[today.getMonth()]; // getMonth() gives 0–11, so we use it as an index in the months array
const day = today.getDate();          // Example: 21

// Step 5: Create a helper function that figures out the correct ordinal suffix for the day number.
// For example: 1 → "1st", 2 → "2nd", 3 → "3rd", 4 → "4th"
// Special case: 11, 12, and 13 always end in "th".
const getSuffix = (n) => {
    if ([11, 12, 13].includes(n % 100)) return "th";
    switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
};

// Build the formatted date string using the year, month, day, and suffix.
// This constraint will keep a formula to get the year, month, date and suffix of the day when called upon.
const formattedDate = year + ", " + month + " " + day + getSuffix(day);

// Step 6: Print today’s weekday and full formatted date.
// This sends out the message "today is (the day the user put in)
// The second line will tell the user the date formatted by year, month, day const that we created.
console.log("Today is:", weekday);
console.log("Formatted date:", formattedDate);

// Step 7: Figure out how many days are left until the last day of coursework (November 13, 2025).
// Create a new Date object for graduation day.
const graduationDate = new Date("2025-11-13");

// Subtract today’s date from graduationDate.
// Dates are stored as milliseconds since Jan 1, 1970, so the result is in milliseconds.
const diff = graduationDate - today;

// Convert milliseconds into days (1000 ms * 60 sec * 60 min * 24 hours).
// Math.ceil() rounds up, so if there’s part of a day left, it counts as a full day.
const daysRemaining = Math.ceil(diff / (1000 * 60 * 60 * 24));

// Step 8: Prints out the countdown message.
// daysRemaining is a construct we created that will do the math to calculate how many days are remaining based off the graduation date the
// user input into the console.
console.log("And you have " + daysRemaining + " days left in this web design program until graduation.");
