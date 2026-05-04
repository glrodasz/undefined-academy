const ONE_SECOND_IN_MILLISECONDS = 1000;
const executeAfterOneSecond = callback => {
  return new Promise( resolve => {
    setTimeout( () => {
      resolve(callback);
    }, ONE_SECOND_IN_MILLISECONDS);
  });
};
const countTo10 = async () => {
  for (let number = 1; number <= 10; number++) {
    await executeAfterOneSecond(countTo10);
    console.log(number);
  }
};
countTo10();
