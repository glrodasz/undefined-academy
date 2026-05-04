function handleSubmit(event) {
    event.preventDefault(); 
    console.log("Prevent Default");
}

const $form =
    document.querySelector("form");
    $form.addEventListener("submit", handleSubmit);
