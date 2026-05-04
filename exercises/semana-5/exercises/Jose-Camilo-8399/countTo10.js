function imprimirNumeros(inicio, fin) {
   const time = setInterval(() => {
      console.log(inicio);
      if (inicio === fin) {
         clearInterval(time);
      }
      inicio++;
   }, 1000);
}

imprimirNumeros(1, 10);
