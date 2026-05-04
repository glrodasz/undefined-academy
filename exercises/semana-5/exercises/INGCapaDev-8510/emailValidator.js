const emailRegex = /^[\w.-]+(\+[\w.-]+)?@[\w-]+\.[\w]{2,7}$/;

const emails = [
  'john.doe@gmail.com',
  'me@guillermorodas.com',
  'me+test1@guillermorodas.com',
  'me+test2@guillermorodas.com',
  'me+netflix@guillermorodas.com.mx',
  'sucuentadecorreo+algoaleatorio@gmail.com',
  'me+@com',
];

const filterEmails = (email) => email.match(emailRegex);

const mapEmails = (email) => {
  const [fullEmail, subaddressing] = email.match(emailRegex);

  if (subaddressing) {
    return fullEmail.replace(subaddressing, '');
  }

  return fullEmail;
};

console.log(emails.filter(filterEmails).map(mapEmails));
