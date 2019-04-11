//Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

//The main methods are:

//new Map() – creates the map.
//map.set(key, value) – stores the value by the key.
//map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
//map.has(key) – returns true if the key exists, false otherwise.
//map.delete(key) – removes the value by the key.
//map.clear() – clears the map
//map.size – returns the current element count.
let map = new Map();
Map.set(2, 'num2');
Map.set('2', 'str2');
Map.set(true, 'bool2');
console.log(map.get(2));
console.log(map.get('2'));
console.log(map.get(true));
console.log(map.size);

let myName = {name:"kabambe"};
let visitsCountMap = new Map();
visitsCountMap.set('kabambe', 123 );
console.log(visitsCountMap.get('kabambe'));

let map = ([
    [1, 'num1']
    ['1', 'str1']
])
console.log(map);

let recipeMap = new Map([
  ['skuma', 250],
  ['tomatoes', 105],
  ['carrots', 345],
  ['onions', 420]  
])

for(let vegetables of recipeMap.keys()){
    console.log(vegetables);
}

for(let values of recipeMap.values()){
    console.log(values)
}

for(let entries of recipeMap){
    console.log(entries);
}
