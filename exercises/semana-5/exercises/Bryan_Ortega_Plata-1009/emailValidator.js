const emails = [
  "john.doe@example.com",
  "jane_doe+shopping@example.org",
  "alice.smith+work@example.co.uk",
  "charlie.brown+newsletter@example.io",
  "emily.watson+notes@example.net",
];

var validEmail = /^[^\s@]+@[^\s@-]+\.+[a-zA-Z]{2,7}$/;
var regCharacters = /\+([^-]+)@/g;
const filterList = (email) => validEmail.test(email);
const mapList = (email) => email.replace(regCharacters, "@");

const newlistEmails = emails.filter(filterList).map(mapList);

console.log(newlistEmails);
