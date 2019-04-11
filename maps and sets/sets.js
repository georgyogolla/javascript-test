/*A Set is a collection of values, where each value may occur only once.

Its main methods are:

new Set(iterable) – creates the set, optionally from an array of values (any iterable will do).
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.*/

let set = new Set();
let cyrus = {name:"cyrus"};
let kabambe = {name:"kabambe"};
let stosh = {name:"stosh"};
let bob = {name:"bob"}
 set.add(cyrus);
 set.add(kabambe);
 set.add(stosh);
 set.add(cyrus);
 set.add(bob)
 console.log(set.size);
 for(let user of set){
     console.log(user.name);
 }

 //Let arr be an array.

//Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
   return Array.from(new Set(arr))
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  console.log(unique(values));

  //Anagrams are words that have the same number of same letters, but in different order.

//Write a function aclean(arr) that returns an array cleaned from anagrams.
function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      // split the word by letters, sort them and join back
      let sorted = word.toLowerCase().split('').sort().join(''); // (*)
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  console.log(aclean(arr));


  /*There’s an array of messages:

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
Your code can access it, but the messages are managed by someone else’s code. New messages are added, old ones are removed regularly by that code, and you don’t know the exact moments when it happens.

Now, which data structure you could use to store information whether the message “have been read”? The structure must be well-suited to give the answer “was it read?” for the given message object.

P.S. When a message is removed from messages, it should disappear from your structure as well.

P.P.S. We shouldn’t modify message objects directly. If they are managed by someone else’s code, then adding extra properties to them may have bad consequences.*/

//apply weakSet
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

// two messages have been read
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages has 2 elements

// ...let's read the first message again!
readMessages.add(messages[0]);
// readMessages still has 2 unique elements

// answer: was the message[0] read?
console.log("Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();
// now readMessages has 1 element (technically memory may be cleaned later)

//The question now is: which data structure you’d suggest to store the information: “when the message was read?”.

//In the previous task we only needed to store the “yes/no” fact. Now we need to store the date and it, once again, should disappear if the message is gone.

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));