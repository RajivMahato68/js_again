// primitive

// 7 types of primitive and every primitive data is called by value
// 1: String
// 2: Number
// 3: Bollean 
// 4: null 
// 5: undefined
// 6: Symbol
// 7: BigInt



const score = 100
const scoreValue = 10.3

const isLoggedIn = false
const outsideTemp = null
let UserEmail ;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// Non-Primitive or Reference type

// 1: Array
// 2: Object
// 3: Function



// ======================== 
// stack memory(primitive) and heap memory(non-primitive)

let myYouTube="rajiv"

let anotherName = myYouTube
anotherName = "chaiaur code"
console.log(myYouTube);
console.log(anotherName);



let userOne={
    email : "user@gmail.com",
    pay : "user"
}

let userTwo = userOne

userTwo.email = "rajiv@gamil.com"

console.log(userTwo.email)
console.log(userOne.email)