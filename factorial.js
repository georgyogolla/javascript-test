//0! =4*3*2*1

function factorial(n){
    if(n==1||n==0) return 1;
    let product = n;
    while(n>1){
    product = product*(n-1)
    n=n-1;
 }
    return product;
 }
console.log(factorial(4));
    

function factor(n){
    if(n==1||n==0) return 1;
    let product = n;
    for(let i=n; i>1; i--){
    product = product*(i-1);
    
 }
    return product;
 }
console.log(factorial(4));


function factor(n){
    if(n==1||n==0) return 1;
    let product = n;
    for(let i=n; i>1; i--){
    product = product*(i-1);
    
 }
    return product;
 }
console.log(factorial(4));

const prod = (a, b) =>a*b;
const sum =  (c, d) => c+d;
const sumprod = sum(10, prod(4,5));
console.log(sumprod);

const div =(e, f) => e/f;
const divsumprod = div(60,sumprod);
console.log(divsumprod);

const div =(e, f) => e/f;
const divsumprod = div(60,sump(10,prod(4,5)));
console.log(divsumprod);


