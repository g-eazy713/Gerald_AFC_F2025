//Decomposition

//convert f -> c formula F = (°C * 9/5) + 32
//convert c -> f formula (32°F − 32) × 5/9 = 0°C
//formula from fahrenheit to cel

// Red, Green, Refactor!
// RED = write test knowing that it will fail
// GREEN = write code that passes test
// REFACTOR = until green, then move on!

// js file imported into a js file, no extension needed
const {convertToCelsius} = require("../src/index")

// const {convertToFahrenheit} = require("../src/index")

// Functionality = API Contracts
describe("Functionality = API Contracts",()=> {
    // Does it exist
    test("does function exist", () => {
        expect(typeof convertToCelsius).toBe("function");
    })

    // Correct parameters = arity = 1
        // Length of function
    test("does function take only 1 argument", () => {
        expect(convertToCelsius.length).toBe(1);
        })
    })
// Does it exist
// Correct parameters = arity = 1

// Data Types = numbers only!
describe("testing datatypes",()=>{
    const dataTypeArray = [undefined,null,true,"32",[],{},]
    dataTypeArray.forEach((element)=>{ //Element can be referenced using any word besides element
        // do something
        test("for each element [undefined,null,true,\"32\",[],{},] -> false",()=>{
            dataTypeArray/forEach(element)
        })
    })

        //     expect(convertToCelsius(undefined)).toBe(false);
        // })
        //
        // test("if null -> false", ()=>{
        //     expect (convertToCelsius(null)).toBe(false);
        // })
        // test("if [] -> false", ()=>{
        //     expect (convertToCelsius([])).toBe(false);
        // })
    })
// Are we getting the correct  data types??

// Undefined, null, true, "32", [], {}, Nan, Infinity, -infinity
// Main data types we use are number, string, boolean

// Precision! do you want it to the exact decimal or up to?
// Do you want to round up or not?

// At -40 c and f are the same

// Phase 10 (required but not needed at the moment)
// Test for Kelvin ( this is not needed but nice to have)


