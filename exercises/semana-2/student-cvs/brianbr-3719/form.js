const form = document.querySelector('form');
const terminos = document.getElementById("terminos")
const checckbox = document.getElementById("checkbox")
form.addEventListener('submit', (e) => {
  
  e.preventDefault();
    form.reset();
    terminos.innerHTML= "Formulario enviado con exito"
    checckbox.checked = true
  setTimeout(() => {
    location.reload()
  }, 2000);
});