// array

const myArr = [0, 2, 4, 8, 9]
const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1])

// array methods

// myArr.push(6)
// myArr.push(77)
// myArr.pop()

// myArr.unshift(10)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

// const newArr = myArr.join()
// console.log(newArr)
// console.log(myArr)

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B",myArr)

const myn2 = myArr.splice(1, 3)
console.log("c",myArr)
console.log(myn2)


// difference between slice and splice is 
// slice is not manupulated the original array but splice is manipulated the original arry this is a main difference of slice and splice


