const emailRegex = /^[\w.-]+(\+[\w.-]+)?@[\w-]+\.+[\w-]{2,7}(\.[\w-]{2,7})?$/;

const emails = [
  "john.doe@example.com",
  "jane_doe+shopping@example.org",
  "alice.smith+work@example.co.uk",
  "charlie.brown+newsletter@example.io",
  "emily.watson+notes@example.net",
  "emily.watson+notesexample.net",
  "me+com",
];

const filteredEmails = (email) => email.match(emailRegex);

const mapEmails = (email) => {
  const [fullEmail, subAddressing] = email.match(emailRegex);

  if (subAddressing) {
    return fullEmail.replace(subAddressing, "");
  }
  return fullEmail;
};
console.log(emails.filter(filteredEmails).map(mapEmails));

// Ejercicio 04 - Semana 05: Crear una funcionalidad que lea una lista de correos validos y remueva la cadena de texto suaddresing