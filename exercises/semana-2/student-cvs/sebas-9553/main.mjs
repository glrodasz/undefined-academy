
function handleSubmit(event) {
    event.preventDefault();
    console.log('Hello world')
}

const $form = document.querySelector("form")
$form.addEventListener("submit", handleSubmit)



