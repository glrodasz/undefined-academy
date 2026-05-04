const EMAIL_REGEX = /^[\w-]+([\.|\+][\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
const SUBADDRESING = /\+[\w]*\@/

const isValidEmail = (email) => EMAIL_REGEX.test(email)


const validateEmails = (emails) => emails.filter(isValidEmail)
const removeSubaddresing = (emails) => emails.map((email) => email.replace(SUBADDRESING, '@'))


// ---------------------- Program execution -------------------

const emails = [
    "john.doe@example.com",
    "jane_doe+shopping@example.org",
    "alice.smith+work@example.co.uk",
    "charlie.brown+newsletter@example.io",
    "emily.watson+notes@example.net",
    "asdasdasda",
    "kkkkkasdadasdasdasd.com",
    "emily.watson++notes@example.net",
    "emily.watson+notes@@example.net",
]

console.log(removeSubaddresing(validateEmails(emails)))