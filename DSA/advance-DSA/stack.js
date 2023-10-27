let data = [];
let size = data.length;
let max = 7;

function push(elem) {
	if (size >= max) {
		return console.warn(
			`stack is full you can't push more than ${max} elements`
		);
	}
	// data.push(elem);
	data[size] = elem;
	size += 1;
}

function pop() {
	if (size > 0) {
		size -= 1;
		data.length = size;
		// data.pop();
		// size -= 1;
	} else {
		return console.log("stack is empty you can't pop");
	}
}

push(3);
push(4);
push(9);
push(12);
push(90);
push(13);
push(45);
console.log(data);

pop();
pop();
pop();
pop();
console.log(data);
