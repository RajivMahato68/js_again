// const coding = ["js", "ruby", "java", "python"]


// const values = coding.forEach( (item) => {
//     console.log(item)
//     return item
// })

// console.log(values)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums= myNums.filter( (num) => {
//     return num > 4
// })


// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums)

const books = [
    {
        title: 'book one',
        genre: 'Fiction',
        publish: 1981,
        edition:2004
    },
    {
        title: 'book two',
        genre: 'Non-Fiction',
        publish: 1992,
        edition:2008
    },
    {
        title: 'book three',
        genre: 'History',
        publish: 1999,
        edition:2010
    },
    {
        title: 'book four',
        genre: 'Non-Fiction',
        publish: 1989,
        edition:2010
    },
    {
        title: 'book five',
        genre: 'Fiction',
        publish: 1987,
        edition:2010
    },
    {
        title: 'book six',
        genre: 'Non-Fiction',
        publish: 1992,
        edition:2008
    },
    {
        title: 'book seven',
        genre: 'Science',
        publish: 2009,
        edition:2014
    },
    {
        title: 'book eight',
        genre: 'Science',
        publish: 2014,
        edition:2016
    }
];

// const userBooks = books.filter( (bk) => bk.genre === 'History')

const userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"} )

console.log(userBooks);