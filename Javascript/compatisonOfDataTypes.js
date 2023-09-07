console.log(null > 0);
console.log(null < 0);
console.log(null == 0);
console.log(null <= 0);
console.log(null >= 0);

/* 
=> The reason is that an equaity check ("==" ) and comaprison check like (">,<,<=,>=") work differently 
=> comparison convert null to a number treating it as 0 that's why console.log(null <= 0) console.log(null >= 0) is true 
=> and console.log(null > 0) console.log(null < 0) console.log(null == 0) is false
*/