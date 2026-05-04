const emailList = [
  "john.doe@example.com",
  "jane_doe+shopping@example.org",
  "alice.smith+work@example.co.uk",
  "charlie.brown+newsletter@example.io",
  "emily.watson+notes@example.net"
]

const validEmailRegExp = /^[\w.-]+(\+[\w.-]+)?@([\w-]+)(\.[a-zA-Z]{2,7})+$/;

const subAdresRegExp = /\+\w+/;

const emailValidation = (list) => {
  const validEmails = list.filter(entry => {
    return validEmailRegExp.test(entry);
  })
  
  return validEmails.map(entry => entry.replace(subAdresRegExp, ""))
}

console.log(emailValidation(emailList));