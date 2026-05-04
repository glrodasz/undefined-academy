function handleSubmit(event) {
    event.preventDefault(); //
    console.log("Hola mundo");
  }
  const ContactForm = document.querySelector("#FormContact");
  
  ContactForm.addEventListener("submit", handleSubmit);