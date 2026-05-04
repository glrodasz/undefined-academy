const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("default event overridden")
})