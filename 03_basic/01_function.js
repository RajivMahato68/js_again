

function sayMyName(){
    console.log("R")
    console.log("A")
    console.log("J")
    console.log("I")
    console.log("p")
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//    console.log( number1 + number2)
// }
function addTwoNumbers(number1,number2){
   
    let result = number1 + number2
    return result
}
const result = addTwoNumbers(3, 4)
// console.log("result:", result)

function loginUserMessage(username= "sam"){
    if(username === undefined){
console.log("please enter a username")
return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Rajiv"))
// console.log(loginUserMessage("hello"))

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 800))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 800, 500, 1000]))
 