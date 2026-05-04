// Crear una funcionalidad que lea una lista de correos y filtre los correos validos y remueva la cadena de texto de subaddresing.

const regexEmailValidation = /^[\w.-]+(\+[\w.-]+)?@[\w-]+\.+[\w-]{2,7}(\.[\w-]{2,7})?$/

const emails = [
    "john.doe@example.com",
    "jane_doe+shopping@example.org",
    "alice.smith+work@example.co.uk",
    "charlie.brown+newsletter@example.io",
    "emily.watson+notes@example.net",
    "hola.com"
]

const emailFilter = email => email.match(regexEmailValidation)

const emailMap = email => {
    const [fullMail, subAddress] = email.match(regexEmailValidation);
    if (!subAddress) {
        return fullMail;
    } else {
        return fullMail.replace(subAddress, "");
    }
};


console.log(emails.filter(emailFilter).map(emailMap))