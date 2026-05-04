/**
 * Clase 2 [EJERCICIO]
  Hacer una función que imprima los números del 1 al 10, un número cada segundo.
 */
  const ONE_SEC_IN_MS = 1000;
  const MAXIMUM_NUMBER = 10;
  function main() {
      for (let i = 1; i <= MAXIMUM_NUMBER; i++) {
          setTimeout(() => console.log(`con let: ${i}`), ONE_SEC_IN_MS * i);
      }
  }
  
  main();