class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`)
    }

    static createID(){
        return `123`
    }

}
const hItesh = new User("hitesh")
// console.log(hItesh.createID())

class Teacher extends User{
    constructor (username, email){
        super(username)
        this.email = email
    }
}


const Iphone =new Teacher("Iphone", "i@phone.com")

console.log(Iphone.createID())