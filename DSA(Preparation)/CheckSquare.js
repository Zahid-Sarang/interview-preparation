// check square in another array
// array1=[[1,2,3] , array2 = [1,9,4,16]

// Method: 1
// function checkSquare(array1, array2) {
// 	for (let i = 0; i < array1.length; i++) {
// 		let isSquare = false;
// 		for (let j = 0; j < array2.length; j++) {
// 			if (array1[i] * array1[i] === array2[j]) {
// 				isSquare = true;
// 			}
// 			if (j === array2.length - 1) {
// 				if (!isSquare) {
// 					return false;
// 				}
// 			}
// 		}
// 	}
// 	return true;
// }

// const array1 = [1, 2, 3, 4];
// const array2 = [1, 9, 4, 16, 90];

// const result = checkSquare(array1, array2);
// console.log(result);

// ======================================================================== //
// Method:2

function isArraySquare(arr1, arr2) {
	let map1 = {};
	let map2 = {};

	for (item1 of arr1) {
		map1[item1] = (map1[item1] || 0) + 1;
	}
	console.log(map1);

	for (item2 of arr2) {
		map2[item2] = (map2[item2] || 0) + 1;
	}
	console.log(map2);

	for (key in map1) {
		if (!map2[key * key]) {
			return false;
		}
		if (map1[key] !== map2[key * key]) {
			return false;
		}
	}
	return true;
}

const arr1 = [1, 2, 4, 2];
const arr2 = [1, 4, 4, 16];
const result = isArraySquare(arr1, arr2);
console.log(result);
