// Crear una funcionalidad que lea una lista de correos y filtre los correos válidos y remueva la cadena de texto de subaddressing.


//Rejex
const emailRegex = /^[\w.-]+(\+[\w.-]+)?@[\w-]+\.[\w]{2,7}$/


//Lista de correos
const emails = [
"charly.maic@gmail.com",
"double@elementdata.com",
"maximo-min@letterspacing.club",
"min+netflix@hotmail.com",
"min+netflixhotmail.com",
"min+@com",
]


const filterEmails = email =>
email.match(emailRegex);


console.log(emails.filter(email =>
email.match(emailRegex)))

const mapEmails = email => {
    const [fullEmail, subaddressing] = email.match(emailRegex)


    if(subaddressing) {
        return fullEmail.replace(subaddressing, "")
    }

    return fullEmail
}

console.log(emails.filter(filterEmails).map(mapEmails))