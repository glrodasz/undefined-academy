let mailSubArray = ['validemail+shipping@example.com', 'invalidemail', 'notvalid@', '@example.com', 'valid.email+whatsapp@example.com', 'invalid@-example.com', 'not_valid@example.com', 'valid+email@example.com', 'invalid@.com', 'notvalid@example', 'valid.email.with.many.dots+instagram@example.com', 'invalid@example..com', 'not_valid_email@example', 'valid.email_with_underscore+youtube@example.com', 'invalid@exam!ple.com', 'notvalidemail@-example.com', 'valid.email.with.number.123@example.com', 'invalid.email@example_.com', 'not_valid_email@example.com.'];
const emailPattern = /^[a-z0-9#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const replacePattern = / *\+[^@]*\ */;

mailSubArray = mailSubArray.filter((email) => {
  if (emailPattern.test(email)) {
    return email;
  }
}).map((email) => {
  return email.replace(replacePattern, '');
});

console.log(mailSubArray);