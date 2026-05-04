for (var i = 0; i <= 10; i++) {
  setTimeout(
    function () {
      console.log(this.i);
    }.bind({ i: i }),
    1000 * i
  );
}
