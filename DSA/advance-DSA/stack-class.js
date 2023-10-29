class stack {
	item = [];
	currentSize;
	maxSize;
	constructor(size) {
		this.maxSize = size;
		this.currentSize = this.item.length;
	}
	push(newVal) {
		if (this.currentSize >= this.maxSize) {
			console.log("stack is full");
		} else {
			this.item.push(newVal);
			this.currentSize++;
		}
	}
	pop() {
		if (this.currentSize > 0) {
			this.item.pop();
		} else {
			alert("stack is empty");
		}
	}
	display() {
		console.log(this.item);
	}
}

stack = new stack(5);
stack.push(20);
stack.push(34);
stack.push(5);
stack.push(56);
stack.push(76);
stack.display();

stack.pop();

stack.display();
