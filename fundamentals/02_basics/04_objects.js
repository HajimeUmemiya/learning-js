// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy"; 
tinderUser.isloggedIn = false;



// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com", 
  fullname: {
    userfullname: {
      firstname: "Rachit", 
      lastname: "Singh"
    }
  }
}


// console.log(regularUser.fullname["userfullname"]);
// console.log(regularUser.fullname.userfullname);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2};

// console.log(obj3);


// how values come from database; 

const user = [
  {
    id: 1, 
    email: "some@gmail.com"
  },
  {
    id: 2,
    email: "some2@gmail.com"
  }
]


console.log(user[0].email);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isloggedInh'));


//object destructuring


const course ={
  courseName: "Js in hindi", 
  price: "999",
  courseInstructor: "Hitesh",
}

// course.courseInstructor

const {courseInstructor: instructor} =  course;
console.log(instructor);

// {
//   "name": "Rachit", 
//   "coursename": "Js in Hindi",
//   "price": "free",
// }