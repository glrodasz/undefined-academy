const emails = [
    'john.doe@example.com',
    'jane_doe+shopping@example.org',
    'alice.smith+work@example.co.uk',
    'charlie.brown+newsletter@example.io',
    'emily.watson+notes@example.net',
]

/**
 * 
 * @param {string[]} emails 
 * @returns string[]
 */
const emailValidator = (emails) => {
    const emailRegex = /^[a-z][\w\-\.]+@[\w]+.[\w\.]+$/gm

    const validEmails = emails.filter((email) => emailRegex.test(email))
    const invalidEmails = emails.filter((email) => !emailRegex.test(email))

    const fixedEmails = invalidEmails.map((email) => {
        const [local, domain] = email.split('@')
        const fixedLocal = local.replace(/(\+[\w]+)/g, '')
        return `${fixedLocal}@${domain}`
    })

    return [...validEmails, ...fixedEmails]
}

console.log(emailValidator(emails))