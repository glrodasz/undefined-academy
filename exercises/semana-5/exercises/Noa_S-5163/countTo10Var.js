function countToTenVar() {
  for (var i = 1; i <= 10; i++) {
    function print(i) {
      return function () {
        console.log(i);
      };
    }
    setTimeout(print(i), 1000 * i);
  }
}

countToTenVar();
