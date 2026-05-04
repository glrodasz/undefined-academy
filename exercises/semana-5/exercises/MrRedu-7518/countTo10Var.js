// Clase 3, semana 5
// Función que imprima los números del 1 al 10, un número
// cada segundo, pero usando un ciclo for con un var.

let ONE_SEC_IN_MS = 1000;
function increment() {
  
    for (var i = 1; i <= 10; i++) {

      let number = i;
      // Los primitivos son copiados por valor, asi que realmente obtenemos una copia independiente de la "i" usado en el bucle

      // Se explica en el último ejercicio de:
      // https://es.javascript.info/closure#ambito-o-alcance-lexico

      let imprimir = () => console.log(number++)
      setTimeout(imprimir, ONE_SEC_IN_MS * i)
    }
}
increment()

/* - - - - - - - - - - - - - - - - - - - - - - - - - - */ 
// Versión de Guille:

// let ONE_SEC_IN_MS = 1000;
function main() {
  for (var i = 1; i <= 10; i++) {

    function print(i){
      return function() {
        console.log(i)
      }
    }

    setTimeout(print(i), ONE_SEC_IN_MS * i)
  }
}
// main()
/* - - - - - - - - - - - - - - - - - - - - - - - - - - */ 