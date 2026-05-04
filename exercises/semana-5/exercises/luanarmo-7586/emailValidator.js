const emails = [
    "john.doe@example.com",
    "jane_doe+shopping@example.org",
    "alice.smith+work@example.co.uk",
    "charlie.brown+newsletter@example.io",
    "emily.watson+notes@example.net"
]

const validEmails = emails.filter(email => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}).map(email => {
    return email.replace(/\+.+@/, '@');
});

console.log(validEmails);