
//Scope determines the accessibility (visibility) of variables.
// code here can NOT use carName

function myFunction() {
    var carName = "Volvo";
  
    // code here CAN use carName
  
  }
  //In JavaScript there are two types of scope:

 // Local scope
 // Global scope
 // JavaScript has function scope: Each function creates a new scope.
  
 // Scope determines the accessibility (visibility) of these variables.
  
 // Variables defined inside a function are not accessible (visible) from outside the function.




 //A variable declared outside a function, becomes GLOBAL.

//A global variable has global scope: All scripts and functions on a web page can access it. 


 var carName = "Volvo";

// code here can use carName

function myFunction() {

  // code here can also use carName 

}

//Automatically Global
//If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

//This code example will declare a global variable carName, even if the value is assigned inside a function.

//Example
//myFunction();

// code here can use carName 

function myFunction() {
  carName = "Volvo";
}

