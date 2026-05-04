function contador (){
    let numeroActual = 1;
    let segundo_en_miliseguntos = 1000;
    const intervalo = setInterval(()=>  {
      console.log(numeroActual);
      numeroActual++;
      if (numeroActual > 10) {clearInterval(intervalo)}
      }, segundo_en_miliseguntos)
  }
  contador() 