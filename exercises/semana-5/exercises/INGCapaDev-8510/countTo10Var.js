const ONE_SECOND_IN_MS = 1000;

for (var i = 1; i <= 10; i++) {
  const element = i;
  setTimeout(() => {
    console.log(element);
  }, ONE_SECOND_IN_MS * element);
}
