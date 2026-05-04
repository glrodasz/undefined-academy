const emails = [
    "john.doe@example.com",
    "jane_doe+shopping@example.org",
    "alice.smith+work@example.co.uk",
    "charlie.brown+newsletter@example.io",
    "emily.watson+notes@example.net"
]



const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const emailsValidFiltered = emails.filter((email) => emailPattern.test(email));

const emailsInvalidFiltered = emails.filter((email) => !emailPattern.test(email));

//Funcionalidad hecha por mi

function removeSubaddressing(email) {
    let index1;
    let index2;
    for (char of email) {
        if (char == "+") {
            index1 = email.lastIndexOf(char);
        } else if (char == "@") {
            index2 = email.lastIndexOf(char)
        }
    }

    const stringModified = email.slice(0, index1) + email.slice(index2);

    return stringModified;

}

//Esta funcionalidad me la dio la IA, hace lo mismo pero con RegEx   XD

// function removeSubaddressing(email) {
//     const stringModified = email.replace(/\+.*@/, "@"); 

//     return stringModified;
//   }

const emailsFixed = emailsInvalidFiltered.map(removeSubaddressing);

const emailListFixed = [...emailsValidFiltered, ...emailsFixed];

console.log(emailListFixed);