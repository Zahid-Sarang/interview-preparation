// count unique Numbers

// input => [1,1,2,2,3,4,4,5,6,7,8,8,9,9,9]
// output => 9

function uniqueNumbersCount(inputArray) {
	if (inputArray.length) {
		let i = 0;

		for (let j = 1; j < inputArray.length; j++) {
			if (inputArray[i] !== inputArray[j]) {
				i++;
				inputArray[i] = inputArray[j];
			}
		}

		return i + 1;
	} else {
		throw console.error("Array is empty");
	}
}

const array = [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9, 9, 9];
console.log(uniqueNumbersCount(array));
