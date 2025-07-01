// objects can be intialized in two ways -> litral and constructor

// singleton -> any constructor we make the singleton is made means it is the only object

// Object litral 

//object.create

const mySymbol = Symbol('Key1');

const jsUser = {
  name: "Rachit",
  age: 24, 
  [mySymbol]: "myKey1",
  location: "Jaipur", 
  email: "Rachitsingh@email.com",
  isLoggedIn: false, 
  lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser)


jsUser.greeting = function(){
  console.log(`Hello Js user, ${this.name}`);  
}

console.log(jsUser.greeting());
