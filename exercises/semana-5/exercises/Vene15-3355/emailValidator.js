const emailRegex = /^[\w.-]+(\+[\w.-]+)?@[\w-]+\.[\w]{2,7}$/;

const emails = [
  "jose.dominguez@gmail.com",
  "amanda-233@hotmail.com",
  "rosalia_fernandez@gmail.com",
  "mariarodriguez@com",
  "mariarodriguez+netflix@gmail.com",
  "facundo.sosa@hotmail.com",
  "brenda_4883+youtube@gmail.com",
  "candelaria-yo99gmail.com",
]

const filterEmails = email => email.match(emailRegex)

const mapEmails = email => {
  const [fullEmail, subaddressing] = email.match(emailRegex)

  if(subaddressing) {
    return fullEmail.replace(subaddressing, "")
  }

  return fullEmail
}

emails 
  .filter(filterEmails)
  .map(mapEmails)