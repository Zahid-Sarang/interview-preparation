const name = new String ("Zahid Parvez Sarang")
console.log(name.length);
console.log(name.__proto__);
console.log(name.toUpperCase());
console.log(name.charAt('2'))
console.log(name.indexOf('a'))

const newString = name.substring(0,4)
console.log(newString);

const anotherString = name.slice(-19,-15)
console.log(anotherString);
console.log(name.trim());
console.log(name.replace(' ',"-"));
console.log(name.includes('Zahid'));
console.log(name.split(" "))