if (true) {
  let a = 0;
  const b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

// {} -> known as scope when come with functions or any conditional statemnt, known as object decalaration when used in objects

/* 
    whatever is outside the scope is known as global scope
  {
    whatever is inside the this scope is knows as block scope
  }

*/

//  nested scope

function one(){
  const username = "Rachit"

  function two(){
    const website = "Youtube";
    // console.log(username);
  }
  // console.log(website);
    // two()
}
// one()

if(true){
  const username = "rachit";

  if(username === "rachit"){
    const website = " youtube"
    // console.log(username + website); 
  }
  // console.log(website);
}

// console.log(username)


console.log(addone(5))

function addone(value){
  return value + 1; 
}

const addTwo = function(num){
  return num + 2; 
}
addTwo(5)


// addTwo(5)c