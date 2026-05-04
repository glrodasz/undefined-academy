const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Sended')
}

document.querySelector('form').addEventListener('submit', handleSubmit)