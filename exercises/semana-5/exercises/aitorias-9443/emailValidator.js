// Crear una funcionalidad que lea una lista de correos y filtre los correos válidos y remueva la cadena de texto de subaddressing
let correos = [
    "john.doe@example.com",
    "jane_doe+shopping@example.org",
    "alice.smith+work@example.co.uk",
    "charlie.brown+newsletter@example.io",
    "emily.watson+notes@example.net",
    "cramdal@hotmail"
];

// Expresión regular para validar los correos
const emailRegExpPattern = /^[\w-]+(\.[\w-]+)*([\w-\+]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

// Validar los correos
const validEmails = correos.filter(email => emailRegExpPattern.test(email));

const nonSubaddressingEmails = validEmails.map(email => email.replace(/(\+[\w-]+)@/, '@'));

console.log(nonSubaddressingEmails);