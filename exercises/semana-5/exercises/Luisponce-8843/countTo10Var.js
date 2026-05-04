  const oneSeg = 1000;

  function count(){
    for (var i = 1; i <= 10; i++) {
      (function(num) {
        setTimeout(function(){
          console.log(num);
        }, oneSeg*num);
  })(i);
  }
  } 
  count();