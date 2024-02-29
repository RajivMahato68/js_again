class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const chai =new Teacher("chai", "chai@gmail.com", "12345")

chai.addCourse()

const masalaChai = new User("MasalaChai")

masalaChai.logMe()

console.log(chai instanceof User)