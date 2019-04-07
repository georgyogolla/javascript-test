function add(num1,num2){
    return num1+num2;

}
add(17,25);
console.log(add(17,25));

/*Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years. */

function calculateDogAge(puppys_age){
var dogs_age = 7*puppys_age;
console.log(`your doggie is ${dogs_age} years old in dog years!`);
}
calculateDogAge(4)
calculateDogAge(7)
calculateDogAge(10)



