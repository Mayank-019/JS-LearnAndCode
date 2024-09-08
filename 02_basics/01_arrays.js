// arrays are resizable in js and can contain elements of different datatypes   

// when we do copy operations on arrays in js, it creates shallow copies

// shallow copies => of an object whose properties share the same reference point(i.e jo bhi changes karenge woh original array mein bhi change hoga)

// deep copies => of an object whose properties do not share the same reference point.

// different ways to initialize arrays
const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Batman", "Superman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)    // array k start mein insert hua h
// myArr.shift()    // array k start mein se value pop hogi

// console.log(myArr.includes(9));     // boolean type => ans
// console.log(myArr.indexOf(9));

const newArr = myArr.join()     // combine hua h + converted in string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log(myn2);

/*  trap for interview: => obs: slice mein range inclde nahi hui aur splice mein range include hui h. (i.e wrong)
    ekbaar original array ko print karke dekho ki iske saath kya hua h 
*/

const myn2 = myArr.splice(1, 3)     // ye wale elements hi nikal jayenge original array mein se
console.log("C ", myArr);           // [ 0, 4, 5 ] ye bachega
console.log(myn2);      
