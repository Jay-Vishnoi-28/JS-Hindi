// Primitive
// 7 types: String, Number, Boolearn, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail ;

const id = Symbol('123')
const anotherID = Symbol('123')
console.log(id == anotherID);

// Reference (Non primitive)
// Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
name: "hitesh",
age: 22, 
}

const myFunction = function(){
    console.log("Hello World");
    
}