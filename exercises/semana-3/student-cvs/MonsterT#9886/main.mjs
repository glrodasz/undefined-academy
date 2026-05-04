function handleSubmit(event) {
	event.preventDefault(); // 🍎
	console.log("Hemos aprendido mucho en 3 semanas gracias guillermo");
}

const $form = document.querySelector("form");
$form.addEventListener("submit", handleSubmit);

