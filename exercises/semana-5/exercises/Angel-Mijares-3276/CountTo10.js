const one_sec_in_ms = 1000;

function counting() {
  for (let n=1; n <= 10; n++) {
      function count() {console.log(n)}
      setTimeout(count, one_sec_in_ms * n)
  }
}

counting();