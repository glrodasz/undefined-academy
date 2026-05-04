const listOfEmails = [
  "john.doe@example.com",
  "jane_doe+shopping@example.org",
  "alice.smith+work@example.co.uk",
  "charlie.brown+newsletter@example.i",
  "emily.watson+notes@example.net",
];

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function removeemailsubaddresing(email) {
    return email.replace(/\+.+(?=@)/, "");
  }

function validateEmail(email) {
  return emailPattern.test(email);
}


let emailsValidatedSubaddressing = listOfEmails.filter(validateEmail).map(removeemailsubaddresing);

console.log(emailsValidatedSubaddressing);