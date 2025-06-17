let score = "33"; 

console.log(typeof(score));


let valueInNumber = Number(score)
console.log(typeof(valueInNumber));

// "33" => 33
// "33abc" => NaN but type is number
// true => 1; false => 0; 

let isloggedIN = 1; 

let booleanisLoggedIn = Boolean(isloggedIN);
console.log(booleanisLoggedIn);
// 1 => true, 0=> false; 
// "" => false; 
// "Rachit" => true


let someNumber = 33; 

let stringNumber = String(someNumber); 
console.log(stringNumber);
console.log(typeof stringNumber);