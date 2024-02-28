// let myName = "rajiv        "
// let chai = "chai       "

// console.log(myName.trueLenght)


let myHeros = ["thor", "spoderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderpower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present is all object`)
}

Array.prototype.heyrajiv = function(){
    console.log(`rajiv hello`)
}
// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyrajiv()
// heroPower.heyrajiv()

// inheritance
const User={
    name : "chai",
    email: "chai@google.com"
}
const teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssiment: "js Assigment",
    fullTime: true,
    __proto__: TeachingSupport
}

teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, teacher)

let anotherUsername = "Chai aur code               "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True lenght is : ${this.trim().length}`)
}
anotherUsername.trueLength()

"hitesh".trueLength()
"iceatea".trueLength()