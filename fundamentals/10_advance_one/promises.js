// const promiseOne = new Promise(function(resolve, reject){
//   // Do an async task
//   // DB calls, cryptography, network

//   setTimeout(() => {
//     console.log('Async task is completed');
//     resolve();
//   }, 1000);
// })

// promiseOne.then(function(){
//   console.log("Proimse consumed");
// }) // connection directly with resolve

// new Promise(function(resolve, reject){
//    setTimeout(() => {
//     // let a, b;
//     console.log('Async task is completed');
//     // console.log(a + c);
//     resolve();
//   }, 1000);
// }).then(() =>{
//   console.log("Proimse consumed");
// }).catch(() =>{
//   console.log("Error Occured");
// })

// const promiseTwo = new Promise((resolve, reject) =>{
//   setTimeout(function(){
//     console.log('Completed')
//       resolve({
//         username: "Chai",
//         email: "chai@example.com"
//       })
//   },1000)
// })

// promiseTwo.then((user) => {
//   console.log(user)
// })

// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({
//         username: "Rachi@123",
//         password: "123",
//       });
//     } else {
//       reject("Error: something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   }).finally(() => console.log("the promise is either resolved or rejected")); // how to avoid call back hell

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({
//         username: "rachit",
//         password: "123",
//       });
//     } else {
//       reject("Error: Something went wrong");
//     }
//   }, 1000);
// });

// // promiseFive.then(() =>{

// // })

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// }

// consumePromiseFive();

// async function getallUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getallUsers();

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) =>{
//   return response.json()
// })
// .then((data) =>{
//   console.log(data);
  
// })
// .catch((err) => console.log(err))

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) =>{
//   return response.json()
// })
// .then((data) =>{
//   console.log(data);
  
// })
// .catch((err) => console.log(err))


// 
// fetch('https://api.freeapi.app/api/v1/public/randomusers')
// .then((respone) =>{
  // return respone.json()
// })
// .then((data) =>{
  // console.log(data);
// })
// .catch((err) =>console.log(err))


// const url = 'https://api.freeapi.app/api/v1/public/randomusers';


// const options = {method: 'GET', Headers: {accept: 'application/json'}};

// try{
//   const respone = await fetch(url,options);
//   console.log(respone)
//   const data = await respone.json();
//   console.log(data);
// }catch(error){
//   console.log(error);
// }

// fetch('https://api.freeapi.app/api/v1/public/randomusers')
// .then((response) =>{
//   return response.json();
// })
// .then((data) =>{
//   console.log(data)
// })
// .catch((err) => console.log("Err: ", err))

let A = [ 2, 1, 4, 10]
let B = [3, 6, 2, 10, 10]

// let set = new Set(A.length);

// for(const num of B){
//   if(set.has(num)){
//     console.log(`${num} is present in both arrays`);
//   }else{
//     console.log(`${num} is unique to B`);
//   }
// }



const map = new Map()

for(const num of A.sort()){
  map.set(num, true);
}

const newArr = [];

for(const num of B.sort()){
  if (map.has(num)){
    // console.log(`${num} is present in both array`);
    newArr.push(num);
  }
}

console.log(newArr);


