// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);  // avoid this type of conversation
// console.log(null >= 0);

// the reason is that an equality check == and comparison > <>= <= work different
// comparisons convert null to a number , trating it as 0.
// thats why null >= is true and (1) null >0 is false.

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);   // avoide this type of conversation 
// console.log(undefined <= 0);
// console.log(undefined >= 0);

//=== strict check

console.log("2" === 2);