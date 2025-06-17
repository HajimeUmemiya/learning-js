let score = "33"; 

// console.log(typeof(score));


let valueInNumber = Number(score)
// console.log(typeof(valueInNumber));

// "33" => 33
// "33abc" => NaN but type is number
// true => 1; false => 0; 

let isloggedIN = 1; 

let booleanisLoggedIn = Boolean(isloggedIN);
// console.log(booleanisLoggedIn);
// 1 => true, 0=> false; 
// "" => false; 
// "Rachit" => true


let someNumber = 33; 

let stringNumber = String(someNumber); 
// console.log(stringNumber);
// // console.log(typeof stringNumber);

// ********************* Operations **************************

// let value = 3; 

let str1 = "hello";
let str2 = " rachit";
// console.log(str1 + str2);

// Increament and decrement => Postfix and prefix

// (++) => The increment (++) operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed. 

let x = 3; 
const y = x++; 

console.log(`x:${x}, y:${y}`);
// expected output : "x: 4, y: 3"

let a = 3; 
const b = ++a; 

console.log(`a:${a}, b:${b}`);
// expected output: "a: 4, b: 4"

// If used postfix(x++), with operator after operand (x++), the increement operator increments and returns the value before incrementing. 

// if used prefix(++x), with operator before operand (++x), the increment operator increments and returns the value after incrementing 


/*
  post fix increment: 

  let x = 3; 
  const y = x++;
  // x is 4; y is 3

  let x2 = 3n; 
  const y2 = x2++;
  // x2 is 4n; y2 is 3n;

*/

/*

  let x = 3; 
  const y = ++x; 
  // x is 4; y is 4; 

  let x2 = 3n; 
  const y2 = ++x2; 

  // x2 is 4n; y2 is 4n;

*/