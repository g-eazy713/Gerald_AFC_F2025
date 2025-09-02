// script.js
// Name: Gerald Durrance
// Task6 - Student Array Operations

// Step 1: Hardcode an array of student objects
// Each object has two pieces of information (properties): a "name" and an "age".
let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 18 }
];

// Step 2: Create a fat arrow function to modify a student's age
// Arrow functions are a shorter way to write functions in JavaScript.
// This function takes in an array of students and allows the user to update one student's age.
const updateStudentAge = (array) => {

    // Step 3: Prompt the user to enter a student's name
    // prompt() shows a popup box and collects input as text.
    let studentName = prompt("Enter the student's name to update:");

    // Step 4: Find the student object in the array
    // The find() method goes through the array and returns the first student object
    // whose "name" matches what the user typed (ignoring uppercase/lowercase).
    let student = array.find(s => s.name.toLowerCase() === studentName.toLowerCase());

    // Step 5: If student is not found, log an error message
    // Sends an error message back to the user that the student is not found, stops the function.
    if (!student) {
        console.log("Error: Student not found.");
        return; // Exit early since we can’t update anything
    }

    // Step 6: Prompt the user for a new age
    // We use Number() to convert the text input into a number so we can store it correctly.
    let newAge = Number(prompt("Enter the new age:"));

    // Step 7: Validate the input (must be a number)
    // If the user typed something like "hello", Number() will produce NaN (Not a Number).
    // In that case, we show an error and stop.
    if (Number.isNaN(newAge)) {
        console.log("Error: Age must be a number.");
        return;
    }

    // Step 8: Update the student's age
    // if everything is valid, update the age.
    student.age = newAge;

    // Step 9: Log the updated array of students
    // This shows the full array with the modified student's new age.
    console.log("Updated students:", array);
};

// Step 10: Call the arrow function with the students array
// This starts the process: asking for a name, updating the age, and logging the result.
updateStudentAge(students);