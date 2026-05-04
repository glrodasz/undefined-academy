//Crear una funcionalidad que lea una lista de correos y filtre
// los correos validos y remueva la cadena de texto de subaddresing.
const emails = [
    'john.doe@example.com',
    'jane_doe+shopping@example.org',
    'alice.smith+work@example.co.uk',
    'charlie.brown+newsletter@example.io',
    'emily.watson+notesexample.net',
    'john.doe@example',
    'jane_doe@example.org',
    'alice.smith+work@example.com.',
    'charlie.brown+newsletter@example',
    'emily.watson+notes@example.',
    'invalid_email',
    '123@example.com',
    'john.doe@',                         
    'john.doe',
]
function validatorEmail(email) {
    const regex = /^[\w.]+(\+[\w.-]+)?@[\w-]+\.[\w]{2,7}$/;
    const resutl = email
        .filter((email) => regex.test(email))
        .map((email) => email.replace(/\+.*(?=@)/g, ''))
    return console.log(resutl)
}
validatorEmail(emails)