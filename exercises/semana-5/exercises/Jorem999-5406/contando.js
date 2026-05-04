function contar(num) {
    console.log(num);
  
    if (num < 10) {
      setTimeout(() => contar(num + 1), 1000);
    }
  }
  
  console.log("Contando del uno al diez...");
  contar(1);