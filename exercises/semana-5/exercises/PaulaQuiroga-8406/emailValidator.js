const emails = [
    "john.doe@example.com",
    "jane_doe+shopping@example.org",
    "alice.smith+work@example.co.uk",
    "charlie.brown+newsletter@example.io",
    "emily.watson+notes@example.net",
    "emily*watsonnotes@examplenet"
];

const emailPattern = /^[\w-+]+(\.[\w-+]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

let filterEmail = emails.filter((email) => {
    return emailPattern.test(email);
});

let mapeoEmail = filterEmail.map((email) => email.replace(/\+[^@]+/, ""));

console.log(filterEmail, mapeoEmail);