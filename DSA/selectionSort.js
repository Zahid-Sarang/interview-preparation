// selection sort

function getSelection(array) {
	for (let i = 0; i < array.length; i++) {
        let min = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[min]) {
				min = j;
			}
		}
		if (i !== min) {
			temp = array[i];
			array[i] = array[min];
			array[min] = temp;
		}
	}
	return array;
}
const result = getSelection([2, 4, 3, 1, 9]);
console.log(result);
