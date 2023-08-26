// Recursion : when function call itself
// if a function call itself than there must be end point
// otherwise it will get called for inifinte time

// let counter = 1;

// function demo(number) {
//   if (counter > number) {
//     return; // return is used to exit the loop
//   }
//   console.log("My name is Zahid", counter);
//   counter++;
//   demo(number);
// }
// demo(10);

// ========================================= Examples ===================================================== //

// sorting using Recursive Function
// [2,3,1,4] -> By default case

// ========================================= Program ===================================================== //

let newArray = [];
let array = [2, 4, 1, 3, 6, 5, 7, 9, 8];
let i = 0;
let j = 1;

function isSorted(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

function checkSorted(array) {
  if (isSorted(array)) {
    newArray = array;
    return;
  } else if (array[i] < array[j]) {
    i++;
    j++;
    checkSorted(array);
  } else {
    [array[i], array[j]] = [array[j], array[i]];
    i = 0;
    j = 1;
    checkSorted(array);
  }
}
checkSorted(array);
console.log(newArray);
