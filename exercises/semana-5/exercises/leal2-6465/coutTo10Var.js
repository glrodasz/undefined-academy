const ONE_SECOND_MS = 1000;
function countToTeen() {
  for (var i = 1; i <= 10; i++) {
    (function (num) {
      setTimeout(function () {
        console.log(num);
      }, num * ONE_SECOND_MS);
    })(i);
  }
}

countToTeen();
