const MILLISECONDS = 1000;
const NUMBERS = 10;

function printNumber(i) {
  return function () {
    console.log(i);
  };
}

function printTenFirstNumbers() {
  for (var i = 1; i <= NUMBERS; i++) {
    setTimeout(printNumber(i), MILLISECONDS * i);
  }
}

printTenFirstNumbers();
