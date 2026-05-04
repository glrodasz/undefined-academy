// ======================== Assignment ========================

let emails = [
    'john.doe@example.com',
    'jane_doe+shopping@example.org',
    'alice.smith+work@example.co.uk',
    'charlie.brown+newsletter@example.io',
    'emily.watson+notes@example.net',]


function checkEmail(emails) {
    const emailChecker = /^[\w._%+-]+(\+[\w_%+-]+)?@[\w.]+\.[a-zA-Z]{2,8}$/;
    const subaddressing = /\+[\w]+\@/

    const emailFilter = email => email.match(emailChecker)

    const emailMapper = email => {
        if (email.match(subaddressing)) {
            return email.replace(subaddressing, '@')
        }
        return email
    }

    console.log(emails
        .filter(emailFilter)
        .map(emailMapper));

}

checkEmail(emails)


// -------------- Outputs ---------------

/*
[
    'john.doe@example.com',
    'jane_doe@example.org',
    'alice.smith@example.co.uk',
    'charlie.brown@example.io',
    'emily.watson@example.net'
]
*/
