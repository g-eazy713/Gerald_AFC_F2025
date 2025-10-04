function setUpForm(document) {
    const form = document.querySelector("form")
    const input = document.querySelector("#name")
    const output = document.querySelector("#output")

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let name = input.value.trim()

        if(!name) output.textContent = "name is required.";
        else output.textContent = `Hello ${name}`;
    })
}

module.exports = {
    setUpForm
}
