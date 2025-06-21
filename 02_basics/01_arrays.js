// array 

// Initialization 

const myArr = [0,1,2,3,4,5];
// const myHeros = ["shaktiman", "naagraj"];

// const myArr2 = new Array(1,2,3,4,5);
// console.log(myArr[1])
// console.log(myArr2);


// Arrays methods
// myArr.push(6);
// myArr.push(7);
// myArr.pop(); // remove the last element

// myArr.unshift(9)

// console.log(myArr);

// myArr.shift();
// console.log(myArr);


// const todo = new Array();

// todo.push("learn javascript for 3 hours");
// console.log(todo);
// todo.push("have some fun outside")
// console.log(todo)


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));


// const newArr = myArr.join()


// slice, splice 

console.log("A ", myArr);

const myn1 = myArr.slice(1,3);

console.log("slice ",myn1); 
console.log("Original Array ", myArr)


const myn2 = myArr.splice(1,3);
console.log("Original Array ", myArr)

console.log("splice ", myn2);