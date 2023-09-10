// signleton
// Object.Create

// object literals

// const mySym = Symbol("user1");

// const JsUser = {
// 	name: "Zahid",
// 	username: "ZahidSarang",
// 	[mySym]: "Zahid",
// 	age: "20",
// 	location: "Mumbai",
// 	email: "email",
// 	isLoggedIn: false,
// 	lastLoginDays: [
// 		"Monday",
// 		"Tuesday",
// 		"Wednesday",
// 		"Thursday",
// 		"Friday",
// 		"Saturday",
// 	],
// };
// JsUser["email"] = "zahidSarang@gmail.com";

// console.log(JsUser.email)  // not recommended method
// Object.freeze(JsUser)
// JsUser["email"] = "zahid@gmail.com"
// console.log(JsUser["email"])
// console.log(JsUser["username"])
// console.log(JsUser[mySym])
// console.log(typeof mySym)
// console.log(typeof (JsUser[mySym]))

// console.log(JsUser)

// PART 1
// singleton
// Object.create

// object literals

// const mySym = Symbol("key1");

// const JsUser = {
// 	name: "Hitesh",
// 	"full name": "Hitesh Choudhary",
// 	[mySym]: "mykey1",
// 	age: 18,
// 	location: "Jaipur",
// 	email: "hitesh@google.com",
// 	isLoggedIn: false,
// 	lastLoginDays: ["Monday", "Saturday"],
// };

// // console.log(JsUser.email)
// // console.log(JsUser["email"])
// // console.log(JsUser["full name"])
// // console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com";
// // Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com";
// // console.log(JsUser);

// JsUser.greeting = function () {
// 	console.log("Hello JS user");
// };
// JsUser.greetingTwo = function () {
// 	console.log(`Hello JS user, ${this.name}`);
// };

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

//================================================================ Part 2 =================================================================//

// const tinderUser = new Object(); // signleTon object
// console.log(tinderUser)

// const tinderUser = {};

// tinderUser.id = "123abc";
// tinderUser.name = "Sammy";
// tinderUser.isLoggedIn = true;

// // console.log(tinderUser);

// const regularUser = {
// 	email: "ZahidSarang@gmail.com",
// 	fullName: {
// 		userFullName: {
// 			firstName: "Zahid",
// 			lastName: "Sarang",
// 		},
// 	},
// };

// // console.log(regularUser.fullName.userFullName);

// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"a",4:"b"}
// const obj3 = {5:"w",6:"x"}

// const result = Object.assign({},obj1, obj2, obj3);
// console.log(result);





// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
