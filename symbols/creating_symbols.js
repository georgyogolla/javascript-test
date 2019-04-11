let firstName = Symbol("id");
let person = {};
person[firstName] = 'George';

console.log(person[firstName]);

var sym = Symbol("drinks")
console.log(typeof sym);


let sym = Symbol("my test")
var obj = {}
obj[sym] = 'lovely'
console.log(obj[sym]);

var mySym1 = Symbol('my test')
var obj = {}
obj[mySym1] = 'bigger secret'
console.log(obj[mySym1]);

 var mySym3 = Symbol('my test')
 var obj = {}
 obj[mySym3] = 'testing your IQ'
 console.log(obj[mySym3])
 