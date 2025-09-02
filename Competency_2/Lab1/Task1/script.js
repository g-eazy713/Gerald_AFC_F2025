// script.js
// Name: Gerald Durrance
// Lab1 - Dynamic Age Calculator

// Step 1: This command creates a function that will calculate the age
// by only using the year. (Function=initializes command)(calculateAge = title of class)(year = name of object)
function calculateAge(year) {
    // Step 2: const will look for the most recent number/obj in this case it is looking for the current
    // year. when called upon, currentYear will reflect todays year. date().getFullYear will get the four digit year instead of two digit year.
    const currentYear = new Date().getFullYear();

    // Step 3: the return function will generate the value that you are requesting
    //in this case, you are subtracting the year from the current year to calculate the age.
    return currentYear - year;
}

// Step 4: const input will allow the user to type a string (word) into the system.
// promp command is used to write a message that the user will be able to see.
const input = prompt("Enter your birth year (e.g., 2004):");

// Step 5: The string the user (input) typed in the system will now equal the birthyear.
// const birthyear is assigned to the input from the user.
const birthYear = Number(input);

// Step 6: the if statement is a boolean function that will check the value is true or false based off what you set the value to be.
// in this case, if the input from the user is (strickly) null or "||" the user typed a non number.
if (input === null || Number.isNaN(birthYear)) {

    // Step 7: Console.log is the command used to print out a message to the user, different from a prompt that request data from a user.
    // the console log function is a displayed message programmed into the system used to communicate with the user.
    console.log("No valid year provided.");
} else {
    // Step 8: else statement is always used in a boolean function. this allows you to create a
    // action if something is not true/false than it will be this function. if the function is correct than the age will be correct.
    const age = calculateAge(birthYear);

    // Step 9: this function will display the calculated age to the user. calling the age will pull the calculated age
    console.log("Your age is:", age);
}