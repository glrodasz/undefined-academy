const emailRegex =  /^[\w.-]+(\+[\w.-]+)?@[\w-]+\.[\w]{2,7}$/

const emails = [
    "john.doe@example.com.com",
    "jone_doe+shopping@example.org",
    "AnimationPlaybackEvent.smith+work@example.co.uk",
    "charlie.brown+newsletter@example.io",
    "emily.watson+notes@example.net",
    "lucas..65@gmail.ar",
    "bebo.@gmail.com", 
]

const filterEmails = email => email.match(emailRegex);


const mapEmails = email => {
    const [fullEmail, subaddressing] = email.match(emailRegex)

    if(subaddressing) {
        return fullEmail.replace(subaddressing, "")
    }

    return fullEmail
}

emails.filter(filterEmails).map(mapEmails);