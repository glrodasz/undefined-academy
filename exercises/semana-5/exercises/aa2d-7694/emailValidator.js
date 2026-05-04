const emailRegex = /^[\w.-]+(\+[\w.-]+)?@[\w-]+\.+[\w-]{2,7}(\.[\w-]{2,7})?$/

const emails = [
    "john.doe@example.com",
    "jane_doe+shopping@example.org",
    "alice.smith+work@example.co.uk",
    "charlie.brown+newsletter@example.io",
    "emily.watson+notes@example.net",
    "hola.com"
]

const filtrarEmail = emails => emails.match(emailRegex)

const removerSubaddresing = emails => {
    const [fullEmail, subaddresing] = emails.match(emailRegex)

    if (subaddresing){
        return fullEmail.replace(subaddresing, "")
    } else{
        return fullEmail
    }
}

console.log("jane_doe+shopping@example.org".match(emailRegex))

console.log(emails.filter(filtrarEmail).map(removerSubaddresing))