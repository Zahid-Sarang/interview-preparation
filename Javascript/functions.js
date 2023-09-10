//  Example -1 => normal function which change object value

// function Cars (theobject) {
//    theobject.make = "toyota";
// }

// const mycar = {
//     make:"Honda",
//     model:"Accord",
//     year:1987,  //year is a property of car object and it's value is 2016
// }
// console.log(mycar.make);
// Cars(mycar);
// console.log(mycar.make)

// Example -2 => Hoisted funcation
// FullName()
// console.log("My Name Is =>>>")

// function FullName(){
//     console.log("Zahid Parvez Sarang")
// }

// Example -3 Function Expression

// console.log("======= Info ========")
// (function(){
//     var name="zahid"
//     let age=21;
//    console.log(`name:${name} age:${age}`)
// })();

// Example -4

// const name = "zahid";
// const age = 21;
// const math = 32;
// const english = 33;

// this funcation is define in  global scope
// function TotalMarks() {
//   return `Total Marks : ${math + english}`; ///return total marks
// }

// function Info() {
//   console.log(`Name:${name} age:${age}`);
//   function SubjectMakrs() {
//     return console.log(`Math:${math} English:${english}`);
//   }
//   return SubjectMakrs();
// }
// Info();
// console.log(`${name} has got ${TotalMarks()}`);

var createCounter = function(n) {
    return function() {
       return console.log(++n)
    };
};

const result = createCounter(10)
result()
result()
result()
