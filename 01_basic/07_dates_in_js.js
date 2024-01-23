// dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024,0,22)
// let myCreatedDate = new Date(2024,0,22, 5, 3, 00)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getSeconds());
// console.log(newDate.getFullYear());
// console.log(newDate.getUTCSeconds());
// console.log(newDate.getTimezoneOffset());
// console.log(newDate.getUTCDay());

newDate.toLocaleString('default', {
    weekday:"long",
    timeZone: "timeZone"
})