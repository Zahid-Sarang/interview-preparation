// Bubble Sort

//=============================================== program ===============================================//

// function BubbleSort(array) {
// 	for (let i = array.length; i > 0; i--) {
// 		for (let j = 0; j < i - 1; j++) {
// 			if (array[j] > array[j + 1]) {
// 				[array[j], array[j + 1]] = [array[j + 1], array[j]];
// 			}
// 		}
// 	}
// 	return array;
// }

// const result = BubbleSort([5, 3, 1, 2, 8, 6, 9, 7, 11, 10, 14, 12,4,13]);

// console.log(result);

// =================================================================================================//

// bubbleSort Optimizations

function BubbleSort(array) {
	for (let i = array.length; i > 0; i--) {
        console.log(i)
		let isSwapped;
		for (let j = 0; j < i - 1; j++) {
			if (array[j] > array[j + 1]) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
				isSwapped = true;
			}
		}
		if (!isSwapped) {
			break;
		}
	}
	return array;
}

const result = BubbleSort([8,1,2,3,4,5,6,7]);

console.log(result);
