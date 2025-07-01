const user = {
  username: "rachit", 
  price: 999, 
  welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`);
    console.log(this)
  }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()


// function chai(){
//   let username = "rachit"
//   console.log(this.username);
// }

// chai()

// const chai = () =>{
//   let username = "rachit"; 
//   console.log(this)
// }

// chai()

// arrow function 


// const addTwo = (num1, num2) =>{
//   return num1 + num2; 
// }


// const addTwo = (num1 , num2) => (num1 + num2)
// const addTwo = (num1, num2) => ({username: "Rachit"});

// console.log(addTwo(2,3))

