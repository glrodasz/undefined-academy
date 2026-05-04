/**
 * Ejercicio
Crear una funcionalidad que lea una lista de correos y filtre los correos validos y remueva la cadena de texto de subaddresing.
 */

const emails = [
  "john.doe@example.com",
  "jane_doe+shopping@example..org",
  "alice.smith+work@example.co.uk",
  "charlie.brown+newsletter@example.io",
  "emily.watson+notesexample.net",
]

const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

function filterValidEmails(emailList) {
  return emailList.filter(email => email.match(emailRegex)).map(email => email.replace(/[+]\w+/, ''))
}

console.log(filterValidEmails(emails))
