function simpleFunc(a, b, c) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    }
    simpleFunc ("First Argument", "Seconad Argument", "Third Argument");


    function simpleFunc(a, b, c){
        if(typeof arguments !=="undefined"){
            //do something
        }
    }