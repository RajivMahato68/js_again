const name = "rajiv"
const repoCount = 50

// console.log(name + repoCount)   this method please not use it is a old. modern days no one can use this method 


// console.log(`Hello my name is ${name} and my rpo Count is  ${repoCount} `);


const gameName = new String ('Hitesh-rajiv')
// console.log(typeof gameName)

// console.log(gameName[0]);
// console.log(gameName.__proto__);



// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// console.log(newString)

const anotherString = gameName.slice(-12, 4)
console.log(anotherString)

const newStringOne = "          hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('hello'))

console.log(gameName.split('-'));
