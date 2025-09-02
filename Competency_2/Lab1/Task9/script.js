//script.js
// Name: Gerald Durrance
// Task9 - Weekday Detector

// Step 1: Create an arrow function named getWeekday.
// Arrow functions are a shorter way to write functions in JavaScript.
// This function will figure out the current day of the week (like Monday, Tuesday, etc.).
const getWeekday = () => {
}

    // Step 2: Use the built-in Date object to get today’s date and time.
    // new Date() automatically captures the current date and time from the computer’s clock.
    const today = new Date();

    // Step 3: Get the day of the week as a number.
    // getDay() returns a number between 0 and 6:
    // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const dayNumber = today.getDay();

// Step 4: Create an array (a list) of weekday names in the correct order.
// The index (position) of each item in this array matches the number returned by getDay().
// For example: days[0] = "Sunday", days[1] = "Monday", ..., d
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Step 5: Return the current day name.
// We use the dayNumber to pick the correct day from the array.
// Example: if dayNumber is 2, this will return "Tuesday".
return days[dayNumber];
};

// Step 6: Call the getWeekday function and print the result to the console.
// console.log() displays the text and the day returned by the function.
console.log("Today is:", getWeekday());
