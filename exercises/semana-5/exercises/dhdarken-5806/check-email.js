const emailRegex = /^[\w.-]+(\+[\w.-]+)?@[\w-]+\.[\w]{2,7}$/;

const emails = [
  "john.doe@gmail.com",
  "me@guillerodas.com",
  "fernando-rey@spacemonkey.com",
  "me+netflix@hotmail.com",
  "me+@com",
  "me+netflixhotmail.com",
];

const filterEmails = emails.filter((email) => email.match(emailRegex));

const mapEmails = filterEmails.map((email) => {
  const [fullEmail, subAdressing] = email.match(emailRegex);
  if (subAdressing) {
    return fullEmail.replace(subAdressing, "");
  }
  return fullEmail;
});

console.log(filterEmails);
console.log(mapEmails);
