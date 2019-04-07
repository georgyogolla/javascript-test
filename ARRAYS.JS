//An array can hold many values under a single name, and you can access the values by referring to an index number
/*Creating an Array
Using an array literal is the easiest way to create a JavaScript Array.
Syntax:
var array_name = [item1, item2, ...];       
Example
var cars = ["Saab", "Volvo", "BMW"]; */
//var cars = new Array("Saab", "Volvo", "BMW");


var currency = ["shillings", "pounds", "rand", "yen"]
console.log(currency);
var array = currency[3];
console.log(array);
console.log(currency.length-1);
currency.toString();

var drugs = ["nefidipin", "panadol", "flagyl"]
drugs.push("Tramadol ");
console.log(drugs);

var categories = ["animals", "trees", "beings", "money"]
console.log(categories.toString());
categories.pop();
console.log(categories)
categories.push("fruits");
console.log(categories);
categories.shift();
console.log(categories);
categories.unshift("food");
console.log(categories);
categories[1] = "bees";
console.log(categories);
categories[categories.length] = "george";
console.log(categories);
delete categories[3];
console.log(categories);
categories.splice(1, 0, "kabambe", "family");
console.log(categories);
var mine = categories.slice(3);
console.log(categories);
//splice - slices out a piece of an element from an array as indicated using an index
//concat can also be used to join different array
/*splice - adds and removes elements in an array by defining the position of the new elements and the element to be remove if any */
//delete - deletes a specified index element in an array
//length - appends a new element to an array without using push method.
//shift - removes the first element in an array and *unshift adds the first element in an array.
//push - adds an element in an array
// pop - removes and returns the last element in an array
//toString - used to convert array elemnts into a string.
//accessing the first element array.
//use *push* method to add elements in an array.

//SORTING AN ARRAY - sort() - sorts an array alphabetically.
var schools = ["nairobi", "kenyatta", "jkuat", "catholic", "maseno", "kca"]
schools.sort();
console.log(schools);
schools.reverse();
console.log(schools);

var marks =[10, 130, 34, 58];
marks.sort(function(a,b){return a-b});
console.log(marks);
marks.sort(function(a,b){return b-a});
marks.sort(function(a,b){return 0.5 - Math.random()}); // sorts array randomly
function myArrayMax(arr){
    return Math.max.apply(null, max);
}
var marks =[10, 130, 34, 58];
console.log(myArrayMax);//Max and Min Array to be rviewed.
  // compares values randomly in an array.
//compare function is used to sort numeric elements in an array.
//reversing an array - reverse an array in descending order.

//ARRAY ITERATION IN JS
//Array iteration methods operate on every array item.
//Array.forEach()
//The forEach() method calls a function (a callback function) once for each array element.

var mynum = [ 14, 25, 13, 41, 15, 61, 3 ]; 
for (index = 0; index < mynum.length; index++) { 
    console.log(mynum[index]);                              // using for loop control structure to iterate an array.
} 
mynum.sort(function(a, b){return a-b});
console.log(mynum);

//using while loop structure to iterate an array
index = 0; 
var mynum = [ 14, 25, 13, 41, 15, 61, 3 ]; ; 
  
while (index < mynum.length) { 
    console.log(mynum[index]); 
    index++; 

}
mynum.sort(function(a, b){return b-a});
console.log(mynum);

//using forEach method.
//The forEach method calls the provided function once for every array element in the order.
index = 0; 
array = [ 140, 12, 303, 34, 25, 406 ]; 
  
array.forEach(myFunction); 
function myFunction(item, index) 
{ 
    console.log(item); 
}
array.sort(function(a, b){return a-b});
console.log(array);


//Using every method.
//The every() method checks if all elements in an array pass a test (provided as a function).
index = 0; 
array = [ 1, 2, 3, 4, 5, 6 ]; 
  
const under_five = x => x < 5; 
  
if (array.every(under_five)) { 
    console.log('All are less than 5'); 
} 
else { 
    console.log('At least one element is not less than 5'); 
} 

//Using map.
//A map applies a function over every element and then returns the new array.
index = 0; 
array = [ 1, 2, 3, 4, 5, 6 ]; 
  
square = x => Math.pow(x, 2); 
squares = array.map(square); 
console.log(array); 
console.log(squares);

//Array.filter()
//The filter() method creates a new array with array elements that passes a test.

//This example creates a new array from elements with a value larger than 18:

Example
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}


Example
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}

//Array.reduce()
//The reduce() method runs a function on each array element to produce (reduce it to) a single value.

//The reduce() method works from left-to-right in the array. See also reduceRight().

//The reduce() method does not reduce the original array.

//This example finds the sum of all numbers in an arra
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}