//A regular expression is a sequence of characters that forms a search pattern.

//The search pattern can be used for text search and text replace operations.
//Syntax:
//pattern/modifiers;

var patt = /w3schools/i;
console.log(patt);

//Example explained:

///w3schools/i  is a regular expression.

//w3schools  is a pattern (to be used in a search).

//i  is a modifier (modifies the search to be case-insensitive).
//In JavaScript, regular expressions are often used with the two string methods: search() and replace().

let str = "kabambe is coming back home today!";
console.log(str.search("home"));//using string search method to search for a string .it returns the position of the specified string.

//Using String search() With a Regular Expression
let str = "kabambe is coming back home home today!";
console.log(str.search(/home/g));

let str = "kabambe is coming back home today!";
console.log(str.replace("kabambe", "georgy"));

 let myDescription = "george ogolla ogolla kabambe speaks luo, english and swahili"
 console.log(myDescription.replace(/ogolla/ig, "apopa"));

var str = "Is this all there is?";
console.log(str.match(/is/ig));//global matching using modifier "g"

var str = "\nIs th\nis it?"
console.log(str.match(/is/im)); // multiple line matching using modifier "m"

//Brackets are used to find a range of characters:

//Expression	Description	Try it
//[abc]	Find any of the characters between the brackets	
//[0-9]	Find any of the digits between the brackets	
//(x|y)	Find any of the alternatives separated with |

    let recipe = "onion, tomato, saumu, salt, cookingoil";
    console.log(recipe.match(/[a, o, k]/ig));

    //Metacharacters are characters with a special meaning:

    //Metacharacter	Description	Try it
    //\d	Find a digit	
    //\s	Find a whitespace character	
    //\b	Find a match at the beginning or at the end of a word	
    //\uxxxx	Find the Unicode character specified by the hexadecimal number xxxx

var myHome = "my home is 1 meter away from 2 schools";
console.log(myHome.match(/\d/g));

var myHome = "my home is 1 meter away from 2 schools";
console.log(myHome.match(/\s/g));

var myHome = "my home is 1 meter away from 2 schools";
console.log(myHome.match(/\bmeter/g));

//Quantifiers define quantities:

//Quantifier	Description	Try it
//n+	Matches any string that contains at least one n
//n*	Matches any string that contains zero or more occurrences of n
//n?	Matches any string that contains zero or one occurrences of n

var name = "jonny junior is a kenyan musician who plays rhumba songs"
console.log(name.match(/n+/i));


var name = "jonny junior is a kenyan musician who plays rhumba songs"
console.log(name.match(/n*/ig));

var name = "jonny junior is a kenyan musician who plays rhumba songs"
console.log(name.match(/n?/i));

//Using test()
//The test() method is a RegExp expression method.
//It searches a string for a pattern, and returns true or false, depending on the result.
 var res = /x/;
 console.log(res.test("jonny junior is a kenyan musician who plays rhumba songs"));
 console.log(/x/.test("jonny junior is a kenyan musician who plays rhumba songs"))//searches for the presence of x in the string and returns true if found and false if not found.

 //The exec() method is a RegExp expression method.

//It searches a string for a specified pattern, and returns the found text as an object.

//If no match is found, it returns an empty (null) object.
var x = /s/;
console.log(x.exec("jonny junior is a kenyan musician who plays rhumba songs"));
console.log(/s/.exec("jonny junior is a kenyan musician who plays rhumba songs"));
try {
    consssole.log(/s/.exec("jonny junior is a kenyan musician who plays rhumba songs"));   
} catch (error) {
    console.log(/s/.exec("jonny junior is a kenyan musician who plays rhumba songs")); 
}


