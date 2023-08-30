// Insertion Sort

/*
 program
*/

const insertionSort = function (array) {
	for (let i = 1; i < array.length; i++) {
		let item = array[i];
		let j = i - 1;
		while (j >= 0 && array[j] > item) {
			array[j + 1] = array[j];
			j--;
		}
		array[j+1] = item;
	}
	return array;
};

const result = insertionSort([8, 2, 4, 1, 3]);
console.log(result);
