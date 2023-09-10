// const user = {
// 	name: "Zahid",
// 	email: "zahid@gmail.com",
// 	isPaid: false,
// };

function createUser({ name: string, isPaid: boolean }) {
}

// createUser({ name: "ZAhid", isPaid: false,email: "zahid@gmail.com}); it will give error on email

let userData = { name: "ZAhid", isPaid: false,email: "zahid@gmail.com"}
createUser(userData);

// function createCourse():{name: string, isPaid: boolean}{
//     return {name: "Zahid", isPaid: false}
// }


export {};
