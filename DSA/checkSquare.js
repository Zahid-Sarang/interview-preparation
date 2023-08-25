// check Square in another array.
// -----------------------------------> Example - 1 <--------------------------------------- //
// case 1
// array 1 = [1,2,3,4] , array 2 = [1,9,4,16]
// output: true
// ======================================= Program ========================================= //
// function isSquareCheck(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     let isSquare = false;
//     for (let j = 0; j < array2.length; j++) {
//       if (array1[i] * array1[i] === array2[j]) {
//         isSquare = true;
//       }
//       if (j === array2.length - 1) {
//         if (!isSquare) {
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// }

// const result = isSquareCheck([1, 2, 3, 4], [1, 9, 4, 25]);
// console.log(result);

// time complexity O(n^2)

// -----------------------------------> Example - 2 <--------------------------------------- //

// case 2
// input => array1=[1,2,4,2] , array2=[1,4,4,16]
// output :true
// ======================================= Program ========================================= //

function checkSquareExample2(array1, array2) {
  let map1 = {};
  let map2 = {};
  console.log("======================= Map 1 ===============================");
  for (item1 of array1) {
    map1[item1] = (map1[item1] || 0) + 1;
    console.log(map1);
  }
  console.log("=============================================================");
  console.log("======================= Map 2 ===============================");
  for (item2 of array2) {
    map2[item2] = (map2[item2] || 0) + 1;
    console.log(map2);
  }
  console.log("=============================================================");
  for (let key in map1) {
    if (!map2[key * key]) {
      return false;
    }
    if (map1[key] !== map2[key * key]) {
      return false;
    }
  }
  return true;
}

const result = checkSquareExample2([1, 2, 4, 2], [1, 4, 4, 16]);
console.log("Result =>",result);
