const ONE_SECOND_IN_MS = 1000;

{
  function countToTen(j){
    return function incrementAndPrint(){
      setTimeout(() => {
        console.log(j)
      },ONE_SECOND_IN_MS * j);
    }
  }

  for (let j = 1; j <= 10; j++) {
    const incrementAndPrint = countToTen(j);
    incrementAndPrint();
  }
}

{

function countToTenV2 () {
  for (let j = 1; j <= 10; j++) {
    function print(j){
      return function() {
        console.log(j);
      }
    }
    setTimeout(print(j), ONE_SECOND_IN_MS * j);
  }
}

  countToTenV2();
}