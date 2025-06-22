function addTwoNumbers(num1, num2){
    // num1 + num2
    // console.log(num1 + num2);

    return num1 + num2;

}

// console.log(addTwoNumbers(3,7));


function loginUserMessage(username){
  if(!username){
    console.log("Please enter a user name");
    return;
    
  }
  return `${username} just logged in `;
}

// console.log(loginUserMessage('Rachit'))

function calculateCartPrice(...num1){
  return num1
}

console.log(calculateCartPrice(200,400,500,600,800,900))

const user = {
  username: "hitest", 
  price: 199, 
}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
  username: "rachit", 
  price: 399
})

const myNewArray = [200,400,100,600];

function returnSecondValue(getArray){
  return getArray[0];
}

console.log(returnSecondValue(myNewArray));



// scope -> 