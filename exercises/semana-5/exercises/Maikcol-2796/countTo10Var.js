function counter () {
 for (var i=1; i<= 10; i++){
  function clousure (j) {
    setTimeout(()=>console.log(j), 1000*j);
  }
   clousure(i);
}

}
counter()
