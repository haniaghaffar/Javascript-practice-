// const permittivityFreeSpace = 8.854187817e-12;
// console.log(permittivityFreeSpace);
// const pi = Math.PI;
// console.log(pi);
// const person = {
//     name: "Alice",
//     age: 30,
//     hobbies: ["reading", "traveling", "swimming"]
//  };
//  console.log(person);
//  function getPermittivity(object) {
//     return object.permittivity;
//  }
//  getPermittivity();
//  arr = [1, 2, 3, 4]
//  function joinStrings(arr) {
//     return arr.join(", ");
// }

//  console.log(joinStrings["five","sdf","jack"]);
//  function joinStrings(arr) {
//     return arr.join(", ");
// }

// result = joinStrings(["Hello", "World", "from", "SheCodes"]);
// console.log(result);
 
 
function createUser(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        }
    };
}
console.log(createUser("john",21,greet))
console.log(greet);

 
