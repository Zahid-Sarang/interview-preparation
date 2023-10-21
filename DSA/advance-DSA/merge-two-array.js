// Merge tow array

// without sorting

// Program:
// let data1 = [3, 7, 12, 34, 56, 90];
// let data2 = [20, 30, 40, 50];
// let data3 = [];

// for (let i = 0; i < data1.length; i++) {
// 	data3[i] = data1[i];
// }
// for (let i = 0; i < data2.length; i++) {
// 	data3[data1.length + i] = data2[i];
// }

// console.log(data3);

// with sorting

// Example: 1
// let data1 = [3, 7, 12, 34, 56, 90];
// let data2 = [20, 30, 40, 50];
// let data3 = [];
// let d1 = 0;
// let d2 = 0;
// let d3 = 0;
// console.log(data3);

// while (d1 < data1.length && d2 < data2.length) {
// 	if (data1[d1] < data2[d2]) {
// 		data3[d3] = data1[d1];
// 		d1++;
// 	} else {
// 		data3[d3] = data2[d2];
// 		d2++;
// 	}
// 	d3++;
// }
// while (d1 < data1.length) {
// 	data3[d3] = data1[d1];
// 	d1++;
// 	d3++;
// }
// console.log(data3);

// Example : 2

function merge(left, right) {
	console.log("merge left: ", left);
	console.log("merge right: ", right);
	let resultArray = [];
	let rightIndex = 0;
	let leftIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			resultArray.push(left[leftIndex]);
			leftIndex++;
		} else {
			resultArray.push(right[rightIndex]);
			rightIndex++;
		}
	}
	console.log("leftIndex", leftIndex);
	console.log("rightIndex", rightIndex);
	console.log("result array", resultArray);
	return resultArray
		.concat(left.slice(leftIndex))
		.concat(right.slice(rightIndex));
}

function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	const middle = Math.floor(arr.length / 2);
	console.log("middle:", middle);

	const left = arr.slice(0, middle);
	console.log("left:", left);

	const right = arr.slice(middle);
	console.log("right:", right);

	return merge(mergeSort(left), mergeSort(right));
}

function mergeAndSort(arr1, arr2) {
	return mergeSort([...arr1, ...arr2]);
}

const array1 = [3, 1, 7];
const array2 = [2, 5, 6];

const result = mergeAndSort(array1, array2);
console.log(result);
