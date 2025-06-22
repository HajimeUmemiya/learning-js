// Immediately Invoked function Expressions (IIFE)


(function chai(){ // named iffi
  console.log(`DB connected`);
  
})(); // global scope pollution ki wajha se kayi baar issue hota he toh for any reason be it variable or anything to get rid of that issue we use iffi

( (name) =>{
  console.log(`DB  connected too ${name}`);
  
})("rachit");