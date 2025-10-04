const{add,squaredNum} = require("./math")

describe("if function exists with correct parameters",()=>{
    test("does add() exist and is a function", () =>{
        expect(typeof add).toBe("function")
    })

    test("add(0 only contains 2 parameters",()=>{
        expect(add.length).toBe(2)
    })
})
