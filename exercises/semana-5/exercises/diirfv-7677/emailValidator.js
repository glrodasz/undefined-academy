const emails = [
    "john.doe@example.com",
    "jane_doe+shopping@example.org",
    "alice.smith+work@example.co.uk",
    "charlie.brown+newsletter@example.io",
    "emily.watson+notes@example.net",
    "mail...usuario@mail.com",
    "usuario.mail@mail....com",
    "usuario-.@mail.com",
    "usuario@mail@mail-.com"];

const regx = new RegExp("(^[a-zA-Z0-9]+)(\\.?\\-*[\\w]+)*(\\+[\\w\\-\\.]+)*@([\\w\\-]+)(\\.[a-zA-Z]{2,})+$");

function filterEmails(emailList){
    let filteredEmails = emailList
    .filter(eachEmail => eachEmail.match(regx))
    .map(filteredEmail => filteredEmail
        .replace(filteredEmail.match(regx)[3],"")
    );

    return filteredEmails;
}

console.log(filterEmails(emails));