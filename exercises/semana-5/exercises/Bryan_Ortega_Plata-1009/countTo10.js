const ONE_MILLISECONDS = 1000

for (let i = 1; i < 11; i++) {
  setTimeout(() => {
    console.log(i)
  }, i * ONE_MILLISECONDS)
}
