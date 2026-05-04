/* 🏋Clase 4 [EJERCICIO]
Crear una funcionalidad que lea una lista de correos y filtre los correos validos y remueva la cadena de texto de subaddresing.

john.doe@example.com
jane_doe+shopping@example.org
alice.smith+work@example.co.uk
charlie.brown+newsletter@example.io
emily.watson+notes@example.net */

//const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
//const emailPatternSub = /^[\w-]+(\.[\w-]+)*(\+)*[\w-]*@([\w-]+\.)+[a-zA-Z]{2,7}$/
//const emailPatternSubaddressing = /^[\w.-]+(\+[\w.-]+)?@[\w-]+\.[\w]{2,7}$/
const emailRegex = /^[\w.-]+(\+[\w.-]+)?@[\w-]+\.([\w]{2,7}\.)?[\w]{2,7}$/


const emails = 
[
    "john.doe+@example.com",
    "john-doe@.com",
    "john.doe@example.com",
    "jane_doe+shopping@example.org",
    "alice.smith+work@example.co.uk",
    "charlie.brown+newsletter@example.io",
    "emily.watson+notes@example.net",
];

//console.log(emails[2].match(emailRegex))

const filterMail = email => email.match(emailRegex)
const mapEmail = email => {
    const [fullEmail, subaddresing] = email.match(emailRegex);

    if(subaddresing){
        return fullEmail.replace(subaddresing, "");
    }
    return fullEmail;
}


console.log(emails.filter(filterMail).map(mapEmail))
