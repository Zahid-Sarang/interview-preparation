// Check if the String is Palindrome or not

/* Program */
// case 1: using javaScript inbuild Functions

function IsPalindromeCase1(str){
    let reverse = str.split("").reverse().join("");
    return str.toLowerCase() === reverse.toLowerCase();
}

const result1 = IsPalindromeCase1("level")
console.log(result1)

// case 2: using pure logic

function IsPalindromeCase2(str){
    let newString = str.toLowerCase()
    let left = 0;
    let right = newString.length-1
    while (left < right){
        if(newString[left] !== newString[right]) return false
        left ++;
        right --;
    }
    return true;
}
const result2 = IsPalindromeCase2("noon")
console.log(result2)