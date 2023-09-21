// for of

// const array = [1,2,3,4,5,6,7,8,9,10,11,12]

// for (const i of array) {
//     console.log(i)
// }

// const greetings = "Hello, world"
// for (const str of greetings) {
//     if(str === ",") return console.log("space identify")
//     console.table(" character " + str)
// }
// const map = new Map();

// map.set("IND","INDIA");
// map.set("USA","UNITED STATES OF AMERICA");
// map.set("UAE","UNITED STATES OF EMIRATE");
// map.set("AUS","AUSTRALIA");

// for(const [key,value] of map){
//     console.log(" KEY => " + key)
//     console.log(" VALUE => " + value)
// }
// console.log(map);

const myObject = {
	js: "Javascript",
	cpp: "C++",
	rb: "Ruby",
	swift: "Swift",
};

// for(const key in myObject){
//     console.log("value => " + myObject[key])
// }

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const result = array.forEach((item, index) => {
	console.log("key => " + index);
	console.log(
		"================================================================"
	);
	console.log("value => " + item);
});
