// Write a program in JS to display date (time, day , month , year).

// get local machine date time
const date = new  Date();

 // get the date as a string
 const n = date.toDateString();

 // get the time as a string
const time = date.toLocaleTimeString();

 // display date
 console.log('Date: ' +n);

 // display time
 console.log('Time: ' + time);