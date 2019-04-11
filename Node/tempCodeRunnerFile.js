let counter = 0;
const intervalId = setInterval(()=>{
    console.log('hello georgy');
    counter = counter+ 1;

if(counter ===5){
    console.log('DONE');
    clearInterval(intervalId)
}
},1000);