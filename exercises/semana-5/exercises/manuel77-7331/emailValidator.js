let emails = [
    "john.doe@example.com",
    "jane_doe+shopping@example.org",
    "alice.smith+work@example.co.uk",
    "charlie.brown+newsletter@example.io",
    "emily.watson+notes@example.net",
    "emily*watsonnotes@examplenet"
]

function validate_mail(mails) {
    const emailPattern = /^[\w-+]+(\.[\w-+]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const mail = mails.map(function (e) {
        if (emailPattern.test(e)) {
            console.log(e.replaceAll(/\+[\w]+/g, ""), "-> valid.");
        } else {
            console.log(e.replaceAll(/\+[\w]+/g, ""), "->  worng.");
        }
    })

}
validate_mail(emails)