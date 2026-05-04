const MILLISECONDS = 1000;
const NUMBERS = 10;

function printTenFirstNumbers() {
  for (let i = 1; i <= NUMBERS; i++) {
    setTimeout(() => {
      console.log(i);
    }, MILLISECONDS * i);
  }
}

printTenFirstNumbers();
