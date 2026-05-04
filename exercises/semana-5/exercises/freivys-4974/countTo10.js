function printNumbers() {
  let count = 1;

  // setInterval se utiliza para ejecutar una función anónima cada 1000 milisegundos (1 segundo)
  const intervalId = setInterval(() => {
    console.log(count);
    count++;
    if (count > 10) {
      clearInterval(intervalId);
    }
  }, 1000);
}

printNumbers();
