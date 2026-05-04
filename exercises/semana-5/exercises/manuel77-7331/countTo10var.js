function count_num(){
    for (var num=0; num<=10; num++){
        (function(ind) {
            setTimeout(function(){
                console.log(ind);
            }, 1000*ind);
        })(num);
    }
}
count_num()

