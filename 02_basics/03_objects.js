// singleton
// Object.create       // ismein banta h singleton

/* 
    Constructor se agar object banayenge toh singleton banega. Literal se banayenge toh nahi banega.
*/

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name" : "Hitesh Choudhary",  // cannot access with dot method
    // mySym : "mykey1",   // wrong way of creating symbol
    [mySym] : "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} // ye curley braces object h 


// ++++ accessing objects ++++ You need to know these 2 methods

// console.log(JsUser.email);
// // console.log(JsUser."full name");    // error
// console.log(JsUser["full name"]);
// console.log(JsUser["email"]);
// // console.log(typeof JsUser.mySym);  // not used as symbol --> value h string
// console.log(JsUser[mySym]);


JsUser.email = "hites@chatgpt.com"
// Object.freeze(JsUser)   // is object ki value change nahi ho saki ab
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log(`Hello Js User, ${this.name}`);
    
}

JsUser.greetingTwo = function() {
    console.log("Hello Js User");
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

