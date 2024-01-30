// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num)
}

const greetings = "helloworld"
for (const greet of greetings) {
    if (greet == " ") {
        // console.log("space detect");
        // continue;
        break;
     
        
    }
    // console.log(`Each char is ${greet}`)
}


// maps

const map = new Map()
map.set('IN', "India")
map.set('NP', "Nepal")
map.set('USA', "United State of America")
map.set('IN', "India")

// console.log(map)

for (const [key, value] of map) {
    // console.log(key, ':-', value)
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key, ':-', value)
// }


