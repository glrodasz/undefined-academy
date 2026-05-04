const emails = [
    "john.doe@example.com",
    "colors.12-jasj@gmail.com",
    "jane_doe+shopping@example.org",
    "alice.smith+work@example.co.uk",
    "charlie.brown+newsletter@example.io",
    "emily.watson+notes@example.net",
    "emily.watson+notesexample.net",
    "me+com",
];

const emailPattern = /^[\w-]+(\.[\w-]+)?(\+[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const subAddresing = /(\+[\w-]+)/;

const emailValid =  (email) => emailPattern.test(email);
const removeSubaddresing = (email) => email.replace(subAddresing,'');

const emailsValidated = emails.filter(emailValid);
const emailsCorrect = emailsValidated.map(removeSubaddresing);

console.log({
    emailsValidated,
    emailsCorrect
})