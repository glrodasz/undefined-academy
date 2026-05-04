let cadenaEmail = [
    "john.doe@example.com",
    "jane_doe+shopping@example.org",
    "alice.smit+work@example.co.uk",
    "charlie.brown+newsletter@example.io",
    "emili.watson+notes@example.net",
  ];
  let regex = /\+[^@]+/gi;
  
  function filtrarEmail(arr) {
    let nuevoEmail = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (regex.test(arr[i])) {
        nuevoEmail.push(arr[i].replace(regex, ""));
      } else {
        nuevoEmail.push(arr[i]);
      }
    }
  
    return nuevoEmail;
  }
  
  let laNueva = filtrarEmail(cadenaEmail);