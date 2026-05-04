

const emailRegex = /^[\w._]+(\+[\w.-]+)?@[\w-]+\.[\w]{2,7}$/


const emails = [
    "correo1@gmail.com",
    "correo2@gmail.com",
    "correo1.correo@gmail.com",
    "correo2.correo@gmail.com",
    "correo_1@gmail.com",
    "correo_2@gmail.com",
    "correo_3+test1@gmail.com",
    "correo_4+test2@gmail.com",
    "c@c.c"
]


// filtrando correos válidos

const filterEmails = email => email.match(emailRegex)


console.log(emails.filter(filterEmails))

const validatedEmails = emails.filter(filterEmails).slice()
//console.log( validatedEmails)



//Eliminando subaddressing de los correos válidos

const mapEmails = email => {
    
    const [fullEmail, subaddressing] = email.match(emailRegex)

    if (subaddressing) {
        return fullEmail.replace(subaddressing, "")
    }

    return fullEmail
}



console.log(validatedEmails.map(mapEmails))


