const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Todo Fino")
}

const $form = document.querySelector("form");
$form.addEventListener("submit", handleSubmit);