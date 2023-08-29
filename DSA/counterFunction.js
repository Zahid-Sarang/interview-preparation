function createCounter (number){
console.log("number: " + number);
    return function(){
     return console.log(number++)
    }
}

const counter = createCounter(10)
counter()
counter()
counter()