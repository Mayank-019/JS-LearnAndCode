// JavaScript is a dynamically typed language. This means that variable types 
// are determined at runtime, and you do not need to explicitly declare the 
// type of a variable before using it. You can assign different types of values 
// to a variable during its lifetime.

// Primitive Data Types (call by value)

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100   // data type --> Number
const scoreValue = 100.3    // data type --> Number [float wagera kuch nahi h]

const isLoggedIn = false
const outsideTemp = null
let userEmail;


// declaring symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

const bignumber = 232432454541667443n


// Non-Primitive Data Types (call by reference)

// Arrays, Objects, Functions

// Arrays
const heros = ["shaktiman", "nagraj", "doga"];

//Objects
let myObje = {
    name: "Mayank",
    age: 21,
}

//Function
const myFunc = function() {
    console.log("Hello World")
}

console.log(typeof(myFunc));