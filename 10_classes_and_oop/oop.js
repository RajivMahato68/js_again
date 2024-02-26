const user = {
    userName : "Rajiv",
    LoginCount : 8,
    signIn: true,

    getUserDetails: function(){
        // console.log("GOt user details from database")
        // console.log(`userName: ${this.userName}`)
        // console.log(this)
    }
}


// console.log(user.userName)
// console.log(user.getUserDetails())
// console.log(this)

function User(userName, LoginCount, isLoggedIn){
    this.userName = userName;
    this.LoginCount = LoginCount;
    this.isLoggedIn = isLoggedIn


    this.greeting = function(){
        console.log(`welcome ${this.userName}`)
    }
    return this

}
// if yu write a new keyboards then first create the empty object and this empty object called instance.
// concertater function called because new keywords
//
const userOne = new User("Rajiv", 12, true)
const usertwo = new User("chaiaurcode", 12, false)
console.log(userOne.constructor);
// console.log(usertwo);
