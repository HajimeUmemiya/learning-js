## Javascript and classes 

1. Do javascript really have classes? 
  - Yes, Javascript doesn have classes. 
  - This feature was introduced with the ECMAScript 2015, specification (often referred to as ES6). 
  - Javascript is primarily a prototype-based language, and its classes are primarily syntactic sugar over exisiting prototype-based inheritance mechanisms.

## OOP
- Programming paradigm 

## Object 
- Collection of properties and methods
- toLowerCase()


## Parts of OOP
- constructor function 
- Prototypes
- classes 
- Instances (new, this)

## 4 Pillars 
Abstraction 
Encapsulation
Inheritance
Polymorphism 



## theory on `NEW`
/*

Here's what happens behind the scnes when the new keyword is used: 

A new object is created: The new keyword initiates the creation of a new Javascript object. 

A prototype is linked: The newly created object gets linked to the prototype property of the construtor function. This means that it has access to properties and methods defined on the constructor's prototype. 

the constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constutor. Javascript assumes this, Javascript assumes this, the newly created object, to be the intended return value. 

the new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, funciton, etc. ) the newly created object is returned

*/