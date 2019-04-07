function myFunction(a, b) {
    return arguments.length;
    
  }
  console.log(myFunction.length);
  
  function myFunction(a, b) {
    return a * b;
  }
  
  var txt = myFunction.toString();
  console.log(myFunction.toString);

  //Arrow functions do not have their own this. They are not well suited for defining object methods.

//Arrow functions are not hoisted. They must be defined before they are used.

//Using const is safer than using var, because a function expression is always constant value.

//You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:

//Example
const x = (x, y) => { return x * y };
x = (5);
y = (5);
console.log(x * y);

x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  var i;
  var max = -Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
  
}


// checks the existence of a name in an array containing names and returns it position index:
var array_names = ['parto','cyrus','dickens', 'lilian', 'phyliss','bob', 'george'];
var array1 = [];
function check_array(items, value){
  if (items.includes(value)) {
    for (var i = 0; i < items.length; i++) {
      if (items[i] === items[items.indexOf(value)]) {
        console.log(`'The name '${value}' exist: and is indexed at position ${i} in the array'`);
      }
    }
  }
  else if (!items.includes(value)) {
    console.log(`'the name '${value}' doesn't exist: Please search for another name in the Array'`);
  }
}
check_array(array_names,'cyrus');


var array_names = ['parto','cyrus','dickens', 'lilian', 'phyliss','bob', 'george'];
function checker(jina){
    var x=array_names.indexOf(jina.toLowerCase()); 
    if (x>0){  
        console.log(`Wolaa! Your name : ${jina} exists in position ${x}`);
    }else{
        console.log(`The name :${jina} doesnt exist in the array. `);
    }
}
checker("Bob");

// checks the existence of a name in an array containing names and returns it position index:
var array_names = ['parto','cyrus','dickens', 'lilian', 'phyliss','bob', 'george'];
    
function myFunction(a, b){
return(console.log(a*b));
}
myFunction(4, 9);

var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return(console.log(this.firstName + " " + this.lastName));
    }
  }
  myObject.fullName();  

  var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return(console.log(this));
    }
  }
  myObject.fullName(); 
  
  function sayHi(){
    return(console.log("Hello!"));//function declaration
  }
  sayHi("Hello!");

  let sayHi = function(){
    return(console.log("Hello!"));//function expression.
  };
  sayHi("Hello!");

  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();

    function showOk() {
      console.log( "You agreed." );
    }
    
    function showCancel() {
      console.log( "You canceled the execution." );
    }

    function ask(question, yes, no) {
      if (confirm(question)) yes()
      else no();
    }
    
    ask(
      "Do you agree?",
      function() { console.log("You agreed."); },
      function() { console.log("You canceled the execution."); }
    );



    let sum = (a, b) => a + b;

    /* The arrow function is a shorter form of:
    
    let sum = function(a, b) {
      return a + b;
    };
    */
    
    alert( sum(1, 2) ); // 3

    //If we have only one argument, then parentheses can be omitted, making that even shorter:
// same as
// let double = function(n) { return n * 2 }
let double = n => n * 2;

alert( double(3) ); // 6

//Arrow functions can be used in the same way as Function Expressions.

//For instance, here’s the rewritten example with welcome():

 let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");

welcome(); // ok now


//Multiline arrow functions
//The examples above took arguments from the left of => and evaluated the right-side expression with them.

//Sometimes we need something a little bit more complex, like multiple expressions or statements. It is also possible, but we should enclose them in curly braces. Then use a normal return within them.

//Like this:

let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, use return to get results
};

alert( sum(1, 2) ); // 3

let ask = (question, yes, no) => confirm(question) ? yes() : no();
ask( "Do you agree?", () => alert("You agreed."), () => alert("You cancelled the execution."));

const timeFuncRuntime = function(funcParameter) {
  let t1 = Date.now();
  console.log(t1)
  funcParameter();
  let t2 = Date.now();
  console.log(t2)
  return t2 - t1;
  }
  
  const addOneToOne = function() {
  return 1 + 1;
  }
  
  timeFuncRuntime(addOneToOne);