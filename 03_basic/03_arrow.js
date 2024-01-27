const user = {
    username: "rajiv",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "rajiv"
//     console.log(this.username)
// }

// chai()

// const chai = function (){
//     "rajiv"
//     console.log(this.username)
// }
const chai =  () =>{
    "rajiv"
    console.log(this)
}
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({ username: "hitesh"})

console.log(addTwo(3, 4))


