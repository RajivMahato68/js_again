// singleton use consector
//object.create


// object literals
const mySym =Symbol("key1")


const jsUser = {
    name: "rajiv",
    "full name": "rajiv mahato",
    [mySym]: "mykey1",
    age: 20,
    location:"kathmandu",
    email: "rajip68@gmail.com",
    isloggedin: false,
    lastLoginDay: ["Monday", "saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["full name"])
// console.log(jsUser["email"])
// console.log(jsUser[mySym])

jsUser.email = "hitesh@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "hitesh@gmail.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user")
}
jsUser.greetingtwo = function(){
    console.log(`Hello js user, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingtwo())