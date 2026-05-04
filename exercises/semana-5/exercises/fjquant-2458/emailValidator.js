const emails=[
    "john.doe@example.com", 
    "jane_doe+shopping@example.org", 
    "alice.smith+work@example.co.uk", 
    "charlie.brown+newletter@example.io", 
    "emily.watson+notes@example.net",
    "gabyasturiabibllioteca.com",
    "felipe-quant@example.com"
]

const emailregex = /^[\w.-]+(\+[\w.-]+)?@([\w-]+)(\.[\w]{2,7})+$/

const filterEmail = email => email.match(emailregex)

const mapEmails = email => {
    const [fullEmail, subaddress] = email.match(emailregex)

    if(subaddress){
        return fullEmail.replace(subaddress, "")
    }

    return fullEmail
}

console.log(emails.filter(filterEmail).map(mapEmails))