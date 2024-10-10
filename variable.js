// // ....>>swap
// let a = 5,b = 10,c = 12,box;
// box = a;
// a = b =c;
// b = box;
// console.log(a,b)
// // second method
// let a = 4,b = 5;
// [a, b] = [b, a]
// console.log(a, b);


// // ........>>concatenation
// let firstName = "John",lastName = "Doe";
// let fullName = firstName +" " + lastName;
// console.log(fullName);
// // ........>boolean
// let age = 11;

// let isAdult = age >= 18;
// console.log(isAdult);
// // ......>>undefined 
// let error;
// console.log(error);
// // ......>reassign
// let num = 100;
// console.log(num);;
// num = 200;
// console.log(num);
// num = 400;
// console.log(num);
// // ......>>template literals
// let name = "John",age = 21;
// console.log("My name is "+name+" and I am "+age+" years old.")
// // .......>>increment and decrement
// let x = 0;
// x++;
// console.log(x);
// x--;
// console.log(x);
// // ......>>type of
// let str = "john"
// let age = 12;
// let married = false
// console.log(typeof str,typeof age,typeof married);
// // .....>>logical OR
// let name;
// let defaultName = name ||"john"
// console.log(defaultName);
// // ......>>check type
// let y = 87;
// if (typeof x==="number") {
//     console.log("x is number");
// }else{

//         console.log("x is not a number");
//     }
// let str = "43";
// let num = Number(str);
// console.log(str);
// let num = 21;
// let str = String(num)
// console.log(str);
// 
// function()=>{//error
//     var a=2;
//     console.log(a);
    
// }();
// let [a, b, c, d, e] = [1, 2, 3, 4, 5];
// console.log(a+b+c+d+e);
// function testVar() {
//     var localVar = "I'm local";
//     let localLet = "I'm local too";
//     console.log(localVar);
//  }
//  console.log(localVar); // What will this log?
// let numbers = [1, 2, 3];
// numbers[0] = 100;
// console.log(numbers);
// function myFunction() {
//     var a = 1;
//     let b = 2;
//     const c = 3;

//     console.log(a, b, c);
//  }
//  myFunction();
// console.log(x);
// const x = 7;
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 3000); // What will be logged?
//  }
// const user = { name: "Alice", details: { age: 25 } };
// user.details.age = 20; // Is this allowed?
// console.log(user);
// var x = 1;
// var x = 2; // Is this allowed?
// let y = 1;
// let y = 2; // Is this allowed?
// console.log(x);

// someVar = "World"; // What happens here?
// console.log(someVar);
// var a = 10;
// function testShadow() {
//    var a = 20;
//    let b = 30;
//    {
//        let a = 40; // What is the value of a here?
//        console.log("Inner a: " + a);
//    }
//    console.log("Outer a: " + a);
// }
// testShadow(); // What will be logged?
// function hoistingTest() {
//     console.log(varVar); // What will this log?
//     console.log(letLet); // What will this log?
//     console.log(constConst); // What will this log?
//     var varVar = "I am var";
//     let letLet = "I am let";
//     const constConst = "I am const";
//  }
//  hoistingTest();
// (function() {
//     var x = 1;
//     let y = 2;
//     const z = 3;
//     console.log(x, y, z); // What will this log?
//  })();
//  console.log(x); // What will this log?
// var a = 1;
// let b = 2;
// function test() {
//    var a = 3;
//    let b = 4;
//    console.log(a); // What will this log?
//    console.log(b); // What will this log?
// }
// test();
// console.log(a); // What will this log?
// console.log(b); // What will this log?

// var x = 5;
// function outer() {
//    var x = 10;
//    function inner() {
//        let x = 15;
//        console.log(x); // What will this log?
//    }
//    inner();
//    console.log(x); // What will this log?
// }
// outer();
// console.log(x); // What will this log?

// const person = { name: "John" };
// person.age = 30; // Is this allowed?
// delete person.name; // Is this allowed?
// console.log(person); // What will this log?
// if (true) {
//     let blockScoped = "I'm inside a block";
//     console.log(blockScoped); // What will this log?
//  }
// //  console.log(blockScoped); // What will this log?
const condition = 1;
switch (condition) {
    case 1:
        let result = "One"; // Is this allowed?
}
console.log(condition);
