const {add, subtract} = require('./demo')
// console.log(add(5,4))

// const doggy = require('./demo')
// console.log(doggy.add(5,4))

// const subtract = require('./demo').add
// console.log(subtract(5,4))

// test(str,cb())
//test("if addition works correctly")

//describe("", cb())
describe("addition tests", ()=>{

test(" add with 5 + 7 = 12",()=>{
    expect(add(5,7)).toBe(12)
})

test("adding 2 + 5 !== 12",()=>{
    expect(add(2,5)).not.toEqual(12)
})

})
describe("subtraction tests", ()=>{

    test("subtract with 2 - 3 = 1",()=>{
        expect(subtract(2,3)).toBe(1)
    })
})

// Test subtraction

// Test multiplication
