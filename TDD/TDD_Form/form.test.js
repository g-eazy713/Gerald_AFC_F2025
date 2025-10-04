/*
*@jest-environment jsdom
 */
const {setUpForm} = require("./form")
// this is how you create a fake dom without using HTML
beforeEach(()=>{
    document.body.innerHTML= ` 
    <form action="/submit"method="post">
    <input type="text"id="name">
    <button type="submit">Submit</button>
</form>
<p id="output"></p>
    `
    //insert the HTML code in the fake dom above (ENDS in BACK TICK)
})

test("does form exist?",()=>{
    const form = document.querySelector("form")
    expect(form).not.toBeNull()
    expect(form.getAttribute("method")).toBe("post")
    expect(form.getAttribute("action")).toBe("/submit")

})

test("Shows an error when input is empty",()=>{
    setUpForm(document)
    const form = document.querySelector("form")
    form.dispatchEvent(new Event("submit"))
    const output = document.querySelector("p")
    expect(output.textContent).toBe("Name is required.")
})

test("shows greeting when input has value",()=>{
    setUpForm(document)
    const input = document.querySelector("input")
    input.value ="Alice"

    const form = document.querySelector("form")
    form.dispatchEvent(new Event("submit"))

    const output = document.querySelector("p")
    expect(output.textContent).toBe("Hello Alice")

    input.value = "Constantin"
    form.dispatchEvent(new Event("submit"))
    expect(output.textContent).toBe("Hello Constantin")

})