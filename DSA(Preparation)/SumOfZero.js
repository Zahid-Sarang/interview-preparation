// checking sum zero - problem 1

// input: [-5,-4,-3,-2,0,2,4,6,8]

// method 1: O(N^2)
// function getSumOfzero(inputArray) {
// 	for (let number of inputArray) {
// 		for (let i = 1; i < inputArray.length; i++) {
// 			if (number + inputArray[i] === 0) {
// 				return [number, inputArray[i]];
// 			}
// 			i++;
// 		}
// 	}
// }
// const array = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
// const result = getSumOfzero(array);
// console.log(result);

// Method 2: O(N)

// function getSumOfZero(inputArray) {
// 	let left = 0;
// 	let right = inputArray.length - 1;

// 	while (left < right) {
// 		let sum = inputArray[left] + inputArray[right];
// 		if (sum === 0) {
// 			return [inputArray[left], inputArray[right]];
// 		} else if (sum > 0) {
// 			right--;
// 		} else {
// 			left++;
// 		}
// 	}
// }
// const array = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
// const result = getSumOfZero(array);
// console.log(result);

// Problem 2 : Get All pairs which sum equals to zero

function getPairsSumofZero(inputArray) {
	inputArray.sort((a, b) => a - b);
	console.log(inputArray);
	let left = 0;
	let right = inputArray.length - 1;
	let pairs = [];

	while (left < right) {
		let sum = inputArray[left] + inputArray[right];
		if (sum === 0) {
			pairs.push([inputArray[left], inputArray[right]]);
			left++;
			right--;
		} else if (sum < 0) {
			left++;
		} else {
			right--;
		}
	}
	return pairs;
}

const array = [10, -10, 2, -7, -3, 1, 3, 5, 7];
const result = getPairsSumofZero(array);
console.log(result);
