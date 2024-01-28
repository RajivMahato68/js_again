// if

// const isUserLoggedIn = true
// const temperature = 41

// if (temperature === 50) {
//     console.log("less than 50")
    
// }else{
// console.log("temperature is greater than 50")
// }

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power : ${power}`)
// }





// const balance = 1000
// if (balance > 500) console.log("test"),  don't do that this type of code
// console.log("test2");

// if (balance <500) {
//     console.log("less than 500")
// }else if (balance <750) {
//     console.log("less than 750")
// }else if (balance < 900){
//     console.log("less than 750")
// }else{
//     console.log("less than 1120")
// }

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard) {
    console.log("allow to buy course")
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in")
}