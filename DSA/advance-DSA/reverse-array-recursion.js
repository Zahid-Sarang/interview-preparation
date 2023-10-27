// example : 1
// let data = [3, 4, 2, 54, 12];
// let temp;

// function customeReverse(data, start, end) {
// 	console.log(data);
// 	if (start <= end) {
// 		temp = data[start];
// 		data[start] = data[end];
// 		data[end] = temp;
// 		customeReverse(data, start + 1, end - 1);
// 	}
// }

// customeReverse(data, 0, data.length - 1);

// example 2
let data = [89, 32, 43, 1, 3];
let size = data.length - 1;
let temp = [];

function reverse(data, size) {
	if (size >= 0) {
		temp.push(data[size]);
		size = size - 1;
		reverse(data, size);
	} else {
		return;
	}
}

reverse(data, size);
console.log(temp);

// example 3
// let item = [1, 2, 3, 4, 5];
// const result = item.reverse();

// console.log("using rever function", result);
