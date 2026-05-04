function handleSubmit(e) {
  e.preventDefault();
  console.log("Hola Mundo");
  const values = Object.fromEntries(new FormData(e.target).entries());
  console.log(values);
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);