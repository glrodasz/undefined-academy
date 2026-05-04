const mailValidator = (mailList) => {
    const mailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    const validMails = mailList.map((mail) => {
        if (mail.match(mailRegex))
        {
            return mail.replace(/\+.*@/, '@')
        }
    })
    return validMails.filter((mail) => !!mail)
}

const mailList = [
    'not-valid@mail',
    'john.doe@example.com',
    'jane_doe+shopping@example.org',
    'alice.smith+work@example.co.uk',
    'charlie.brown+newsletter@example.io',
    'emily.watson+notes@example.net',
]


const assertionTest = (validMails) => {

    const expectedList = [
        'john.doe@example.com',
        'jane_doe@example.org',
        'alice.smith@example.co.uk',
        'charlie.brown@example.io',
        'emily.watson@example.net',
    ]
    const expected = JSON.stringify(expectedList)
    const result = JSON.stringify(validMails)

    console.assert(result === expected, '%o', {expected, result, errorMsg: 'is not the expected valid mail list'})
}

const validMails = mailValidator(mailList)
console.log(validMails)
assertionTest(validMails)



