// Clase 2, semana 5

// Función que imprima los números del 1 al 10, un número cada segundo.
const ONE_SEC_IN_MS = 1000;
function increment(n) {
  if (n === undefined) {
      n = 1;
  }

  if (n <= 10) {
    setTimeout(() => {console.log(n++), increment(n)}, ONE_SEC_IN_MS);
  }
}
increment()




/* - - - - - - - - - - - - - - - - - - - - - - - - - - */ 
// Versión de Guille:

// let ONE_SEC_IN_MS = 1000;
function onePerSecond() {
  for (let i = 1; i <= 10; i++) {
    let imprimir = () => console.log(i)
    setTimeout(imprimir, ONE_SEC_IN_MS * i)
  }
}
// onePerSecond()
/* - - - - - - - - - - - - - - - - - - - - - - - - - - */ 
