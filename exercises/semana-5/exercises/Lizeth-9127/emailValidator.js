const emailsArray = [
    "john.doe@example.com",
    "jane_doe+shopping@example.org",
    "alice.smith+work@example.co.uk",
    "charlie.brown+newsletter@example.io",
    "emily.watson+notes@example.net",
    "this@somethig.", //Invalid
  ];
  const regExp = /^[\w]+([\.\+\w]+)?@([\w-]+\.)+[a-zzA-Z]{2,}$/;
  const isValidEmail = email => regExp.test(email);
  const replaceSubaddresing = email => email.replace(/\+\w+/, "");
  const validEmailsWithNoSubaddressing = emailsArray
    .filter(isValidEmail)
    .map(replaceSubaddresing);
  console.log(validEmailsWithNoSubaddressing);
  