const emailRegex = /^[\w.-]+(\+[\w.-]+)?@[\w.-]+\.[\w]{2,7}$/;

const emails = [
    'john.doe@example.com',
    'me@sebasvalencia.com',
    'fernando-rey@spacemonkeys.agency',
    'me+netflix@sebasvalencia.com',
    'me+netflixsebasvalencia.com',
    "me+com",
];

const filterEmails = email => email.match(emailRegex);

const mapEmails = (email) => {
    const [fullEmail, subAddressing] = email.match(emailRegex);

    if(subAddressing){
        return fullEmail.replace(subAddressing, "")
    }
    return fullEmail
}

console.log( emails.filter(filterEmails).map(mapEmails) );

