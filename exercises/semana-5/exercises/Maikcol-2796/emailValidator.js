const validEmails = (arrayEmails) => {
  const emailPattern = /^[^\s@]+@[^\s@-]+\.+[a-zA-Z]{2,7}$/;
  const stringToRemovePattern = /\+.+@/;
  const validMails = arrayEmails.filter((email) => emailPattern.test(email));
  const emails = validMails.map((email) =>
    email.replace(stringToRemovePattern, "@")
  );
  return emails;
};
const array = [
  "john.doe@example.com",
  "jane_doe+shopping@example.org",
  "alice.smith+work@example.co.uk",
  "charlie.brown+newsletter@example.io",
  "emily.watson+notes@example.net",
  "me´@com",
];
validEmails(array);
