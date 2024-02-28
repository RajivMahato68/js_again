function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

function createUser(userName, score){
    this.userName = userName
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()

/* 
Here's what happens behind the scenes when the new keywords is used:

a new object is created : the new keywords initiates the creations of a new Javascript object.

a prototype is linked: the newly created object gets linked to the prototype property of the constructor function.this means that it has access to properties and methods defines on the constructor's prototype.

The constructor is called: the constructor function is called with the specified argument and this is bound to the newly created objects. If no explicit return vlaue is specifies from the constuctor Javascript assumes this, and newly crated object to be the intended return values.

the new object is returned : after the constructor function has been called if it doesn't return a non-primitive value (object, array, function, etc), the newly created object is returned.


*/


