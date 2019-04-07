//creating an object
//let user = new Object(); // "object constructor" syntax
//let user = {};  // "object literal" syntax

let object = {
    fruit:3,
    drink:7,
    people:6
}
console.log(object.fruit + object.drink + object.people);
console.log("fruit" in object); //finds property names in objects and returns true if available and false if not available.

let object = {
    test:undefined
}
console.log(object.test);
console.log("test" in object);

let user = {
    name: "John",
    age: 30,
    "isAdmin": true
  };
  for(let key in user){
      console.log(key);
  }
  console.log(user["key"]);
