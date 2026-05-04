const emailRegex = /^[\w.-]+(\+[\w.-]+)?@[\w-]+\.[\w]{2,7}$/
const emails = [
"john.doe@example.com",
"john.doe@example.academy",
"jane_doe+shopping@example.org",
"alice.smith+work@example.co.uk",
"charlie.brown+newsletter@example.io",
"emily.watson+notes@example.net",
"me+undefinedacademy.com",
"me+@com",
]

const filterEmails = email=>
email.match(emailRegex)

const mapEmails = email =>{ 
    const [fullEmail, subaddressing] = 
    email.match(emailRegex)

    if(subaddressing) {
        return fullEmail.replace(subaddressing, "")
    }
    return fullEmail
}
 
console.log(emails
.filter(filterEmails)
.map(mapEmails));