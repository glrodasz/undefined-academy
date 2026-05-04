/* CLASE 4
Crear una funcionalidad que lea una lista de correos y filtre los correos validos y remueva la cadena de texto de subaddresing.

Correos de ejemplo:
john.doe@example.com
jane_doe+shopping@example.org
alice.smith+work@example.co.uk
charlie.brown+newsletter@example.io
emily.watson+notes@example.net
me+netflixguillermorodas.com
me+@com
*/

const emailRegex = /^[\w.-]+(\+[\w.-]+)?@[\w-]+\.[\w]{2,7}$/

const emails = [
"john.doe@example.com",
"jane_doe+shopping@example.org",
"alice.smith+work@example.co.uk",
"charlie.brown+newsletter@example.io",
"emily.watson+notes@example.net",
"me+netflixguillermorodas.com",
"me+@com",
]

const filterEmails = email =>
email.match(emailRegex);

const mapEmails = email => {
  const [fullEmail, subadressing] = email.match(emailRegex)
  
  if(subadressing) {
    return fullEmail.replace(subadressing, "")
  }
  
  return fullEmail
}

emails
  .filter(filterEmails)
  .map (mapEmails)
