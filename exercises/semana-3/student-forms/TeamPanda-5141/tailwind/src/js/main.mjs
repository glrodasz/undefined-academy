function handleSubmit(event) {
    event.preventDefault(); // 🍎
    console.log("Hola Mundo")
    /* console.log(new FormData($form));
    let valuesForm = FormData.getAll($form);
    return valuesForm; */
}
    
const $form = document.getElementById("form");
$form.addEventListener("submit", handleSubmit);