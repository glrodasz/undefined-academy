function filtrarCorreos(correos) {
  const correoValidoRegex = /^[\w-\.+]+(?=@[\w-]+(\.[\w-]+)*\.[\w-]{2,7}$)/;
  const correosFiltrados = [];
  const subaddressRegex = /\+.*?(?=@)/g;
  for (let i = 0; i < correos.length; i++) {
    const correo = correos[i];
    const correoSinSubaddresing = correo.replace(subaddressRegex);

    if (correoValidoRegex.test(correoSinSubaddresing)) {
      correosFiltrados.push(correoSinSubaddresing);
    }
  }

  return correosFiltrados;
}


const listaCorreos = [
  "john.doe@example.com",
  "jane_doe+shopping@example.org",
  "alice.smith+work@example.co.uk",
  "charlie.brown+newsletter@example.io",
  "emily.watson+notes@example.net"
];

console.log(filtrarCorreos(listaCorreos));