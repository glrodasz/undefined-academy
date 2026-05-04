const REGEX_VALIDADOR_EMAIL =
  /^[\w-]+([\.|\+][\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const correosElectronicos = [
  "john.doe@example.com",
  "jane_doe+shopping@example.org",
  "alice.smith+work@example.co.uk",
  "charlie.brown+newsletter@example.io",
  "emily.watson+notes@example.net",
];

function validarCorreos(correos) {
  return correos
    .filter((correo) => REGEX_VALIDADOR_EMAIL.test(correo))
    .map((correo) => correo.replace(/\+.*(?=@)/g, ""));
}

console.log(validarCorreos(correosElectronicos));
