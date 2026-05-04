const regex = /^[\w.]+(\+[\w.-]+)?@[\w-]+\.[\w]{2,7}$/

const emails = [
    "angelmijarees@gmail.com",
    "marialbg9+facebook@yahoo.edu",
    "marialbg9+facebookyahoo.e",
    "mijares.angel+2656@bing.co",
    "morbik+18_4@hotmail.org",
    "me@guillermorodas.com"
];

const filterEmails = email => email.match(regex)

const mapEmails = email => {
    const [fullEmail, subaddressing] =
    email.match(regex)

    if(subaddressing) {
        return fullEmail.replace(subaddressing, "")
    }

    return fullEmail
}

console.log(emails.filter(filterEmails).map(mapEmails));