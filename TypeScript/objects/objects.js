"use strict";
// const user = {
// 	name: "Zahid",
// 	email: "zahid@gmail.com",
// 	isPaid: false,
// };
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return { name: "Zah", email: "zah@gmail", isActive: true };
}
var result = createUser({ name: "", email: "", isActive: false });
console.log(result);
