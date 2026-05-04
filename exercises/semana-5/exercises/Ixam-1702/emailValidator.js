const validEmailRegex = /^\w+([.-_+-]?\w+){0,2}@\w+([.-]?\w+){0,1}(\.\w{2,7})$/;

const emailList = [
  "john.smith@example.com",
  "jane_doe+shopping@example.org",
  "alice.smith+work@example.co.uk",
  "charlie.brown+newsletter@examen.com",
  "emily.watson@example.net",
  "notes@mail.bo",
  "ministerio-salud+oficina@gov.bo",
  "jhon.smith.h@mail.com",
  "max powers@mail.com", //Desde aqui correos NO validos
  "nibles.project@freemail-.com",
  "abc#def@mail,com",
  "abc-@mail.com",
  ".abc@mail.com",
  "micorreo..personal@mail.com",
  "micorreo,personal@mail.com",
  "mi.sub.dominio.dot@mail.com",
  "mi.sub@dominio.dot.net.info"
];
//Filtrar los correos validos en un array
const validEmails = emailList.filter(email => email.match(validEmailRegex));

//Remover el subaddress (signo +) de los correos validos
const removedSubAddress = validEmails.map(email => {
  const [fullEmail, firstSubDomain, secondSubDomain] =
    email.match(validEmailRegex);
  if (firstSubDomain && !secondSubDomain) {
    if (firstSubDomain.charAt(0) === "+") {
      return fullEmail.replace(firstSubDomain, "");
    } else {
      return fullEmail;
    }
  } else if (!(firstSubDomain && secondSubDomain)) {
    return fullEmail;
  } else {
    return fullEmail.replace(firstSubDomain, "");
  }
});

//Imprimir RESULTADO FINAL: Correos validos sin SubAddress
console.log(removedSubAddress);