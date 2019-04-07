//When you use the increment/decrement operator after the operand, the value will be returned before the operand is increased/decreased.
let a = 1;
console.log(a++);    // 1
console.log(a);      // 2

//If you’d rather make the variable increment/decrement before returning, you simply have to use the increment/decrement operator before the operand:
let a = 1;
console.log(++a);    // 2
console.log(a);      // 2

let b = 1;
console.log(--b);    // 0
console.log(b);      // 0