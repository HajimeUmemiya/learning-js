// const user = {
//   username: 'rachit', 
//   logincount: 9, 
//   signedIn: true,

//   getUserDetails: function(){
//     // console.log("got user details for database");
//     console.log(this.username);
//     console.log(this);
    
//   }
// }

// // console.log(user.username);
// // console.log(user.getUserDetails());

// // console.log(this);

// const promiseOne = new Promise();
// const date = new Date()


function User(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  // return this
}

const userOne = new User("rachit", 25, true);
const userTwo = new User("rachit", 25, true);

console.log(userOne);
console.log(userTwo);

// console.log(this)