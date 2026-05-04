function handleSubmit(event){
    event.preventDefault() 
    console.log('Hola mundo')
    const form = event.target
    const inputs = form.querySelectorAll('input:not([type="submit"]), select, textarea')
    inputs.forEach(input => input.value = '')
}

const form = document.querySelector(".contact-form")
form.addEventListener('submit', handleSubmit)


