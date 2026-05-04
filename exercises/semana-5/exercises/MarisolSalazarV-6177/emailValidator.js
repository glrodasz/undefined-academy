const EMAIL_REJEX = /^[\w.-]+(\+[\w.-]+)?@[\w-]+\.+[\w-]{2,7}(\.[\w-]{2,7})?$/;

// ^[\w.-]+(\+[\w.-]+)?@[\w-]+\.+[\w-]{2,7}(\.[\w-]{2,7})?

const emails = ["john.doe@example.com",
"jane_doe+shopping@example.org",
"alice.smith+work@example.co.uk",
"charlie.brown+newsletter@example.io",
"emily.watson+notes@example.net", ]

const filterEmails = email => email.match(EMAIL_REJEX);

// console.log("emily.watson+notes@example.net".match(EMAIL_REJEX))

const mapEmails = email => {
  const [fullEmail, subaddressing] = 
  email.match(EMAIL_REJEX)

  if(subaddressing) {
    return fullEmail.replace(subaddressing, "")
  }

  return fullEmail
}

console.log(emails
.filter(filterEmails)
.map(mapEmails));