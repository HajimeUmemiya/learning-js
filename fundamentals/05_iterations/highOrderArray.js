const arr = [1,2,3,4,5];
for(const num of arr){
  // console.log(`Val of ${num}`); 
}

const greetings = "Hello World!";

for(const greet of greetings){
  // console.log(`Each char is ${greet}`)
}


// Maps 
const map = new Map()
map.set('IN', "INDIA");
map.set("USA", "United States of America");
map.set("Fr", "France");

console.log(map);

for(const [key,value] of map){
  console.log(key, ':-', value)
}

// const myObject = {
//   'game1' : "NFS", 
//   'game2' : 'spiderman'
// }

// for(const [key, value] of myObject){
//     console.log(key, ':-', value)
  
// }

