const ONE_SECOND_IN_MS = 1000;

for (let i = 1; i < 11; i++) {
  setTimeout(() => {
    console.log(i);
  }, ONE_SECOND_IN_MS * i);
}
