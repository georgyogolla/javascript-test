const http = require('http');
const server = http.createServer((req, res))=>{
    res.end('Hello World\n');
    server.listen(4242, ()=>{
        console.log('server is running...');
    });
}

 setTimeout(() => {
  console.log('hello after 0.5 seconds');  
},
0.5 * 1000
 );

 function setTimeout(delay){
     console.log('Hello after ' + delay + ' seconds')
 }
 setTimeout(4);
 setTimeout(8);

 setInterval(()=>
    console.log('hello every 3 seconds'),
    3000

 );

 const time = setTimeout(()=>console.log('this will not be displayed'),
 0
 );
 clearTimeout(time);
 //one can also use clearInterval
 //clearImmediate

 //count every at  an interval of 1 second 5 times
let counter = 0;
const intervalId = setInterval(()=>{
    console.log('hello georgy');
    counter = counter+ 1;

if(counter ===5){
    console.log('DONE');
    clearInterval(intervalId)
}
},1000);

