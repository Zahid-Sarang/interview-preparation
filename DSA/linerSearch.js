// linear Search

//=========================================== program ===========================================//

const users = [
	{ username: "Zahid", email: "zahid@gmail.com" },
	{ username: "abbas", email: "abbas@gmail" },
	{ username: "jhon", email: "jhon@gmail" },
	{ username: "david", email: "david@gmail" },
	{ username: "vector", email: "vector@gmail" },
];

function isUserExist(array,user){
    for(let item of array){
        if(item.username === user){
            return item;
        }
    }
    return false;
}

const result = isUserExist(users,"abbas");
console.log(result);