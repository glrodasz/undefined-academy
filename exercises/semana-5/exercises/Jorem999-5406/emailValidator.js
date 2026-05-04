 const emailPattern = /^[\w.-]+(\+[\w.-]+)*@[\w-]+\.[\w.]{2,7}$/;
const replacePattern = / *\+[^@]*\ */;
const emailList = [
    'john.doe@example.com',
    'jane_doe+shopping@example.org',
    'alice.smith+work@example.co.uk',
    'charlie.brown+newsletter@example.io',
    'emily.watson+notes@example.net',
    'alguna.direccion+que+no.sirve+por@toxica.ex']


function validateEmails(emails) {

    const validatedEmails = emails
        .filter(email => emailPattern.test(email))
        .map(email => email.replace(replacePattern, ''));

    return validatedEmails;
}

console.log(validateEmails(emailList))
