// main.mjs
function handleSubmit(event) {
    event.preventDefault();
    console.log("Lo lograste campeón!!");
}
    
const $form =document.querySelector("form");

$form.addEventListener("submit", handleSubmit);