const countTo10Var = () => {
    for(var number=1; number<=10; number++){
        ( number => { setTimeout( () => console.log(number), 1000*number);} )(number);
    }
}

countTo10Var();