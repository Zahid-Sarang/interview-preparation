// =========================================================================
// problem 1

// myFun();

// var myFun = function () {
// 	console.log("first function");
// };

// myFun();

// function myFun() {
// 	console.log("second function");
// }

// myFun();

// =========================================================================

// problem 2

// var variables = 10;

// (() => {
// 	console.log(variables);

// 	variables = 20;

// 	console.log(variables);
// })();

// console.log(variables);

// var variables = 30;

// =========================================================================

// problem 3

// variable = 10;

// (() => {
// 	foo = 100;
// 	console.log(variable);
// 	var foo = 100;
// 	variable = 20;
// 	console.log(variable);
// })();

// console.log(foo);
// console.log(variable);
// var variable = 30;

// =========================================================================
// problem 4

// for (var i = 0; i < 10; i++) {
// 	setTimeout(() => console.log(i), 0);
// }
// outcome will be : it will be print 10 , 10 times because var is global variable

// =========================================================================
// problem 5

// var fullName = "zahid sarang";

// var obj = {
// 	fullName: "Full Name is Zahid",

// 	prop: {
// 		fullName: "Inside Props Full Name ",
// 		getFullname: function () {
// 			return this.fullName;
// 		},
// 	},

// 	getFullname: function () {
// 		return this.fullName;
// 	},

// 	getFullnameV2: () => this.fullName,

// 	getFullnameV3: (function () {
// 		return this.fullName;
// 	})(),
// };

// console.log(obj.prop.getFullname());
// console.log(obj.getFullname());
// console.log(obj.getFullnameV2());
// console.log(obj.getFullnameV3);

// =========================================================================
// problem 6

// const zahid = {
// 	name: "Zahid",
// 	syMyName: function () {
// 		return this.name;
// 	},
// };

// const bushra = {
// 	name: "Bushra",
// 	syMyName: function () {
// 		return this.name;
// 	},
// };

// console.log(bushra.syMyName(zahid));

// =========================================================================
// problem 7

// const zahid = {
// 	name: "Zahid",
// 	syMyName: function () {
// 		return console.log(this.name);
// 	},
// };

// const newFn = zahid.syMyName; // it will give undefined because excution context will change

// const newFn = zahid.syMyName.bind(zahid);
// setTimeout(newFn, 3 * 1000);

// =========================================================================
// problem 8

const obj = Object.create({
	height: 30,
});

console.log(obj.height);

delete obj.height;

console.log(obj.height);

// if we create a new object using Object.create then it put the values in prototype so delete methods won't work
