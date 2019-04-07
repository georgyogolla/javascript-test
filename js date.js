//ways of creating date in js.
//new Date() - creates a new date with the current browser settings
//new Date(year, month, day, hours, minutes, seconds, milliseconds)- creates a new date object with a specified date and time.
//new Date(milliseconds)
//new Date(date string) - creates a new date object from a date string:

var date = new Date();
date.toUTCString();
date.toDateString();
console.log (date);

//Date string
var date = new Date("January 15, 2019 6:52:32");
console.log(date);
var date = new Date(100000);
console.log(date);
var date = new Date(-100000);
console.log(date); /*Using new Date(milliseconds), creates a new date object as January 1, 1970, 00:00:00 Universal Time (UTC) plus the milliseconds:

Fri Jan 02 1970 03:00:00 GMT+0300 (East Africa Time)

One day (24 hours) is 86,400,000 milliseconds.*/

// 0 means 01.01.1970 UTC+0 -- creating new date (milliseconds)
/*new Date(year, month, date, hours, minutes, seconds, ms)
Create the date with the given components in the local time zone. Only two first arguments are obligatory.

Note:

The year must have 4 digits: 2013 is okay, 98 is not.
The month count starts with 0 (Jan), up to 11 (Dec).
The date parameter is actually the day of month, if absent then 1 is assumed.
If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.*/

let Jan01_1970 = new Date(0);
console.log( Jan01_1970 );

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log( Jan02_1970 );

let date = new Date();
console.log(date.getTimezoneOffset());


//setting dates
/*setFullYear(year [, month, date])
setMonth(month [, date])
setDate(date)
setHours(hour [, min, sec, ms])
setMinutes(min [, sec, ms])
setSeconds(sec [, ms])
setMilliseconds(ms)
setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC */
    let date = new Date(2016, 1, 28);
    date.setDate(date.getDate() + 2);
    console.log(date);

    let date = new Date();
date.setSeconds(date.getSeconds() + 70);

console.log (date);//gives the correct date.

let date = new Date(2016, 0, 2); // 2 Jan 2016

date.setDate(1); // set day 1 of month
alert( date );

date.setDate(0); // min day is 1, so the last day of the previous month is assumed
alert( date ); // 31 Dec 2015

let date = new Date();
console.log(+date);

//The important side effect: dates can be subtracted, the result is their difference in ms.

//That can be used for time measurements:

let start = new Date(); // start counting

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // done

alert( `The loop took ${end - start} ms` );


//using date.noe to measure difference in dates
let start = Date.now(); // milliseconds count from 1 Jan 1970

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // done

alert( `The loop took ${end - start} ms` ); // subtract numbers, not dates

// we have date1 and date2, which function faster returns their difference in ms?
function diffSubtract(date1, date2) {
    return date2 - date1;
  }
  
  // or
  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();  
  }

  /*These two do exactly the same thing, but one of them uses an explicit date.getTime() to get the date in ms, and the other one relies on a date-to-number transform. Their result is always the same.

So, which one is faster?

The first idea may be to run them many times in a row and measure the time difference. For our case, functions are very simple, so we have to do it around 100000 times.

Let’s measure:*/

