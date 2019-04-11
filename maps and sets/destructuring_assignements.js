//Array Destructuring
//Object Destructuring
// ... rest Destructuring

//Destructuring allows you to extract values from an object or an Array and assign them as variables.

//function argument destructuring
function bmi(person) {
    const height = person.height;
    const weight = person.weight;

    return weight / height;
}
// 🤯 Destructured Code
function bmi({ height, weight }) {
    return weight / height;
}

// Both are called the same way
bmi(person);

const peeps = [
    ['guido', 'van rossum', 'python'],
    ['brendan', 'eich', 'rust'],
];

for (const [first, middle, lang] of peeps) {
    console.log('hello ' + first);
}

const animals = [
    { type: 'dog', name: '🐺 fido' },
    { type: 'cat', name: '🐱 snowball' }
];


for (const { name, type } of animals) {
    console.log(name, type);
}


const animals = [
    { 
        type: '🐺 dog', 
        name: 'simba', 
        friends: ['rex', 'todd', 'bob'], 
        profile: { 
            color: 'brown',
            weight: 23 
        } 
    },
    { 
        type: '🐱 cat', 
        name: 'soldier', 
        friends: [ 'fido' ], 
        profile: { 
            color: 'white',
            weight: 7
        } 
    }
];


for (const { name, type, friends: [best], profile: { color } } of animals) {
    const bio = `${name} is a ${color} ${type} and his best friend is ${best}`
    console.log(bio);
}
