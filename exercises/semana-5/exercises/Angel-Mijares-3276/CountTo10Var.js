const one_sec_in_ms = 1000;

function counting() {
  for (var n=1; n <= 10; n++) {
      (function(n) {
      setTimeout(function() {
        console.log(n);
      }, one_sec_in_ms * n);
  })(n)
}
}

counting();