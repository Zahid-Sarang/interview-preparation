// Divide and Conquerer Technique
// Find the index of the given no in a sorted array => 7

function FindIndexOfTarget(array, target) {
	if (!array.length) {
		return "empty array";
	}
	let left = 0;
	let right = array.length - 1;
	let i = 0;

	while (left <= right) {
		console.log(i++);
		let mid = Math.floor((left + right) / 2);
		if (array[mid] === target) {
			return mid;
		} else if (array[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return "element not found";
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const target = 16;
const result = FindIndexOfTarget(array1, target);
console.log("============================================================");
console.log(result);
