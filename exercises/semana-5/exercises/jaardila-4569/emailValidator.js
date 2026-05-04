/**
 * Clase 4 [EJERCICIO]
Crear una funcionalidad que lea una lista de correos y filtre los correos validos y remueva la cadena de texto de subaddresing.
 */
const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; // Expresión regular para validar el formato de correo electrónico
const emails = [
    "john.doe@example.com",
    "john.foo.example.com",
    "invalid.email",
    "jane_doe+shopping@example.org",
    "alice.smith+work@example.co.uk",
    "charlie.brown+newsletter@example.io",
    "emily.watson+notes@example.net"
]

function filterEmails(emails) {
    const validEmails = [];

    for (const email of emails) {
        if (emailRegex.test(email)) {
            // Remover cadena de texto de subadressing
            const atIndex = email.indexOf('@'); //se obtiene el índice de '@'
            const plusIndex = email.indexOf('+');//se obtiene el índice de '+'

            //determinar si la cadena de subadressing existe (plusIndex > -1) y si aparece antes de '@' (plusIndex < atIndex).
            if (plusIndex > -1 && plusIndex < atIndex) {
                //obtener la parte del correo electrónico antes del '+' y obtener la parte después de '@'
                const filteredEmail = email.substring(0, plusIndex) + email.substring(atIndex);
                validEmails.push(filteredEmail);
            } else {
                validEmails.push(email);
            }
        }
    }

    return validEmails;
}

const filteredEmails = filterEmails(emails);
console.log(filteredEmails);