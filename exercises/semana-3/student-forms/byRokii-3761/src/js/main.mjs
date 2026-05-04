function handleSubmit(event) {
	event.preventDefault();
	alert("Hola Mundo");
}

const $form = document.querySelector("form");
$form.addEventListener("submit", handleSubmit);
