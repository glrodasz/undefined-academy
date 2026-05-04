const emailRegex = /^[\w.-]+(\+[\w.-]+)?@[\w-]+\.+[\w]{2,7}$/;

const emails = [
    "tony.stark@gmail.com",
    "tony+@com",
    "tony@avengersmember.com",
    "tony-stark@avengersmember-ironman",
    "tony+mail@avengersmember.com",
    "tony+mailavengersmember.com",
]

const filterEmails = email => email.match(emailRegex);

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