// foreach loop

const coding = ["js", "ruby", "java", "python"]

// coding.forEach( function (item) {
//     console.log(item)
// })

// coding.forEach((item) => {
//     console.log(item
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

const myCodding = [
    {
        languageName: "javascript",
        languagefileName: "js"
    },

    {
        languageName: "java",
        languagefileName: "java"
    },
    {
        languageName: "python",
        languagefileName: "py"
    }
]

myCodding.forEach( (item) => {
    
console.log(item.languageName)
})