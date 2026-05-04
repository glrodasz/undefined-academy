const ONE_SECOND = 1000;

function returnCounterAferter1sec(counter) {
  return new Promise(function (resolve) {    
    setTimeout(() => {
      resolve(counter);
    }, ONE_SECOND);
  });
}

async function countTo10() {
  for (var i = 1; i <= 10; i++) {
    let counter = await returnCounterAferter1sec(i);
    console.log(counter);
  }
}

countTo10();
