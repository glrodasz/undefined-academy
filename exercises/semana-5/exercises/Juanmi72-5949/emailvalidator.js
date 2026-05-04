const emailList = ["john.doe@example.com",
    "jane_doe+shopping@example.org",
    "alice.smith+work@example.co.uk",
    "charlie.brown+newsletter@example.io",
    "emily.watson+notes@example.net",
    "paco"];

const emailPattern =/^[\w._0-9]+(\+[\w.-_]+)?@[\w._]+\.[\w]{2,8}$/;



const result = emailList.map( function(email) {
    if (emailPattern.test(email)){
        console.log('Correo válido');
    } else {
        console.log('Correo NO válido');
    }
    return emailPattern.test(email)
}  );

const result1 = emailList.filter(email => email.match(emailPattern)).map(emailOk =>{
    return emailOk.replace(/\+\w+/, "");
});

console.log(result1)


