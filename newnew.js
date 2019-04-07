for(let i = 0; i<10; i++){
    console.log(i);
}

let my_a, my_b;
function myFun(a, b){
    my_a = a;
    console.log(typeof my_a);
    my_b = b;
    console.log(my_b);
}
myFun(1, 2);

function isEven(N){
    if(N<0){
    return (-N);
    }
    else if (N % 2 == 0){
    return true;
    }
    else if (N % 2 == 1){
    return false;
    }
    else{
    return isEven(N - 2)
    }
    }
    console.log(isEven(50));
    console.log(isEven(75));
    console.log(isEven(-1));

