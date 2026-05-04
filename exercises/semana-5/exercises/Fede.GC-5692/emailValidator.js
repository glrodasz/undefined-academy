const emailRegex = /^[\w.-]+(\+[\w.-]+)?@[\w-]+\.[a-z]{2,7}(\.[a-z]{2,3})?$/

const emails = [
    "michael.jackson@gmail.com",
    "freddie_mercury@hotmail.es",
    "elvispresley+dance@outlook.com.ar",
    "john-lennon+letitbe@gmail.com",
    "kurtcobain@outlook.agency",
    "whitneyhouston@hotmail.club",
    "madonna+netflix@gmail.online",
    "wrong-email.com",
    "wrong-email2@com",
    "wrong-email2@gmail.32",
]

const filterEmails = email => email.match(emailRegex);

const mapEmails = email => {
    const [fullEmail, subaddress] = email.match(emailRegex);

    if (subaddress) {
        return fullEmail.replace(subaddress, "");
    }

    return fullEmail;
}

console.log(emails.filter(filterEmails).map(mapEmails))