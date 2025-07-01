const userEmail = "r@chit.ai";
const arr = []

if(userEmail){
  console.log("got user email");
}else{
  console.log("Dont' have user email");
}

// falsy Values = [false, 0, -0, BigInt, 0n, "", null, undefined, NaN]

// truthy value = ["0", 'false', " ", [], {}, function(){},]

// if(arr.length === 0){
//   console.log("Array is empty");
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//   console.log('Object is empty');
  
// }

// Nullish coalescing operator (??): null undefined 

let val1; 
// val1 = 5 ?? 10; 
// console.log(val1);


// val1 = null ?? 10 ?? 15

// console.log(val1);

// condition ? true : false; 

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");



