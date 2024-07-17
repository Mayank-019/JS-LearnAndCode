const name = "Mayank"
const repoCount = 50

// older method, don't use this now
// console.log(name + repoCount + " Value");


// string interpolation
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

// another way of declaring string

const gameName = new String("mayank-mk-com")
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 4);     // end wali value n-1 leta h. eg: o/p => maya "n" --> include nahi kiya h jabki woh 4th position pe h 
console.log(newString);
// negative values won't work in substring()

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "  mayank  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://mayank.com/mayank%20kanojia"

console.log(url.replace('%20', '-'));

console.log(url.includes('mk')); 

console.log(gameName.split('-'));