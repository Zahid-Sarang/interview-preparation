// const user = {
// 	name: "Zahid",
// 	email: "zahid@gmail.com",
// 	isPaid: false,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// // createUser({ name: "ZAhid", isPaid: false,email: "zahid@gmail.com}); it will give error on email

// let userData = { name: "ZAhid", isPaid: false, email: "zahid@gmail.com" };
// createUser(userData);

// function createCourse():{name: string, isPaid: boolean}{
//     return {name: "Zahid", isPaid: false}
// }

// ================================================================= Type Aliases =================================================================

type User = {
	name: string;
	email: string;
	isActive: boolean;
};

function createUser(user: User): User {
	return { name: "Zah", email: "zah@gmail", isActive: true };
}

const result = createUser({ name: "", email: "", isActive: false});
console.log(result);
export {};
