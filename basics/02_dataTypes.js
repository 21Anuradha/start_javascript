"use strict";
// alert(6 + 4)
console.log(3 + 2)
let age = 19;
console.log("ANu")
console.log(typeof undefined );

//symbol

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);


const bigNumber= 234567890987654323456n
console.log(bigNumber);

//non primitive

const heros = ["balvir","Ravi","Doga"]
let obj = {
    name: "anuradha",
    age: 25,
}

//function declaration 
const myFunction = function(){
    console.log("Hello");
    
}

console.log(typeof myFunction);

