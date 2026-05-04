async function printNumberEachOneSecond() {
  for (var i = 1; i <= 10; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(i);
  }
}

printNumberEachOneSecond();