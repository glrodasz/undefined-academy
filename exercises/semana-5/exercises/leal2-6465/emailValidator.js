const regexEmailValidation = /^[\w._0-9]+(\+[\w.-_]+)?@[\w._]+\.[\w]{2,8}$/;

const emailFilter = (mail) => mail.match(regexEmailValidation);

const emailMap = (mail) => {
  const [fullMail, subAddress] = mail.match(regexEmailValidation);
  if (!subAddress) {
    return fullMail;
  } else {
    return fullMail.replace(subAddress, "");
  }
};

function EmailValidCheck(emailList) {
  if (!Array.isArray(emailList)) {
    const ListOfEmails = emailList.split(" ");
    return ListOfEmails.filter(emailFilter).map(emailMap);
  } else {
    return emailList.filter(emailFilter).map(emailMap);
  }
}

const Mails =
  "john.doe@example.com jane_doe+shopping@example.org alice.smith+work@example.co.uk charlie.brown+newsletter@example.io emily.watson+notes@example.net john.doeexample.com john.doe@examplecom";

const emailListTest = Mails.split(" ");
console.log(EmailValidCheck(Mails));

console.log(EmailValidCheck(emailListTest));
