// function addTwoNumber(Number: number): number {
// 	return Number + 2;
// }

// addTwoNumber(8);

// function upperCase(char: string) {
// 	console.log(char);
// }

// upperCase("abc");

// function getValue(myValue: number) {
// 	if (myValue > 5) {
// 		return true;
// 	}
// 	return "200 OK";
// }

// const getHello = (s: string): string => {
// 	return "";
// };

// const heros = ["thor", "spiderman", "ironman"];
// // const heros = [1,2,3,4]

// heros.map((hero):string => {
// 	return `hero is ${hero}`;
// });

// function consoleError(errmsg:string):void {
//   console.log(errmsg);
// }

function consoleError(errmsg: string): never {
	throw new Error(errmsg);
}

export {};
