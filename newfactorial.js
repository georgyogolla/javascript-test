// block bindings
//temperel Dead Zone
//Hoisting

function myFunc(a, b){
    let my_a = a;
    console.log(typeof my_a);
    let my_b = b;
    console.log(typeof my_b);


}
myFunc(1, 2);

function myFunc(a, b){
const my_a = a;
console.log(typeof my_a);
const my_b = b;
console.log(typeof my_b);
}
myFunc(1, 2);

function myFunction(a,b){
    var my_a = a;
    console.log(typeof my_a);
    my_a =a + b;
    console.log(my_a);
}
myFunction(1,2);

for(const i = 0; i<10; i++){
    console.log(i);
}


let str = "     Hello       ";
console.log(str.trim());//used to remove white spaces include in a string.

var description = "white and blue!"
console.log(description.replace("blue", "green"));//used to replace a specified string .

let greetings = "hello george";
console.log(greetings.toUpperCase());
console.log(greetings.charAt(7));
console.log(greetings.search("george"));
console.log(greetings.slice(1, 7));
//converts characters to upper case and the viceversa is done using toLowercase
//The charAt() method returns the character at a specified index (position) in a string:
