// Primitive 
// Primitives are call by value, mean everytime we copy the value and use somewhere we making changes on the copied value not on actual value
// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt, 

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false; 
const outsideTemp = null;
let userEmail; // undefined

const id = Symbol('123');
// Reference Type  - Non Primitive
// allocates the reference of a value in memory

// Array, Objects, functions 

const heros = ["shaktiman", "naagraj", "doga"];
let myobj = {
  name: "Rachit", 
  age: 24,
}

const myfunciton = function(){
  console.log("Hello World");
}

// Javascript is dynamically typed language. This means that the type of a variable is determined at runtime based on the value assigned to it. 


// Stack memory used in primitive datatypes , Heap memory used in non-primitive


