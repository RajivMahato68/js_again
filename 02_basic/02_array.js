const marvelHeros = ["thor", "Ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros)
// console.log(marvelHeros[3][1])

// const allHero = marvelHeros.concat(dcHeros)
// console.log(allHero)

const allHero = [...dcHeros,...marvelHeros]
// console.log(allHero)


const another_array = [1, 2, 3, [4, 5, 6], 7, [9, 7, 8, [44, 45]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)




console.log(Array.isArray("Rajiv"))
console.log(Array.from("Rajiv"))
console.log(Array.from({name: "rajiv"}))  //interesting case 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
