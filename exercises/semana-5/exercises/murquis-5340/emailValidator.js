const emailList = [
    "john.doe@example.com",
    "jane_doe+shopping@example.org",
    "alice.smith+work@example.co.uk",
    "charlie.brown+newsletter@example.io",
    "emily.watson+notes@example.net"
]

//Regex puede devolver grupos coincidentes con los parentesis
const emailPattern = /^[\w.-]+(\+[\w.-]+)?@[\w-]+(\.[\w]{2,7})+$/;

const filterEmails = email => email.match(emailPattern)

const mapEmails = email => {
    // Al saber que el regex me puede devolver 2 grupos, los puedo recoger directamente
    const [fullEmail, subaddressing] = email.match(emailPattern)

    if(subaddressing){
        return fullEmail.replace(subaddressing, "")
    }

    return fullEmail
}

console.log(emailList
    .filter(filterEmails)
    .map(mapEmails)
)