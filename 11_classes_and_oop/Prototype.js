// let myName = "Rachit    ";

// console.log(myName.truelength);

// // trueLength = propety
// // trueLength() = method
// //

// let myHeros = ["thor", "spiderman"]

// let heroPower = {
//   thor: "hammer", 
//   spiderman: "sling", 

//   getSpiderPower: function(){
//     console.log(`Spider power is ${this.spiderman}`);
//   }
// }

// Object.prototype.hitesh = function(){
//   console.log(`Hitesh is present in all objects`);
// }

// Array.prototype.heyHitesh = function(){
//   console.log(`Hitesh says hello`)
// }

// myHeros.hitesh()
// myHeros.heyHitesh();
// heroPower.heyHitesh();

const User = {
  name: "chai", 
  email: "chai@google.com"
}

const Teacher = {
  makeVideo: true
}

const TeachingSupport = {
  isAvailable: false
}

const TASupport = {
  makeAssignment: 'JS assignment', 
  fulltime: true,
  __proto__: TeachingSupport
}

Teacher.__proto__ = User



// moder syntax 

Object.setPrototypeOf(TeachingSupport, Teacher);


let anotherUserName = "chaiaurcode     ";

String.prototype.trueLength = function(){
  console.log(`${this}`);
  // console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);
  
}

anotherUserName.trueLength()