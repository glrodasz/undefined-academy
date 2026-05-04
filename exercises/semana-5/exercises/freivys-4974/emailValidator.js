// Expresión regular
const emailRegex = /^[\w.-]+(\+[\w.-]+)?@[\w-]+\.[\w]{2,7}$/;

// Lista de emails a validar
const emails = [
  'javier.apple@gmail.com',
  'me@guillermorodas.com',
  'me+test1@guillermorodas.com',
  'me+test2@guillermorodas.com',
  'me+netflix@guillermorodas.com.mx',
  'sucuentadecorreo+algoaleatorio@gmail.com',
  'me+@com',
];

// La función filterEmails verifica si un correo electrónico cumple con la expresión regular
const filterEmails = (email) => email.match(emailRegex);

// La función mapEmails elimina la parte de subaddressing (como "+test1" o "+netflix") del correo electrónico
const mapEmails = (email) => {
  const [fullEmail, subaddressing] = email.match(emailRegex);

  if (subaddressing) {
    return fullEmail.replace(subaddressing, '');
  }

  return fullEmail;
};

// Imprime los correos electrónicos procesados
console.log(emails.filter(filterEmails).map(mapEmails));
