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
