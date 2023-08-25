// String Anagram
// 'hello' -> 'llleo

// conditions
// => both strings length should be same
// => and both strings number's of letter's should be same

// ==== Program =============================================== //

function AnagramString(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string"){
    return false;
  }
  if (string1.length !== string2.length) {
    return "Not anagrams";
  }
  let counter = {};
  for (let letters of string1) {
    counter[letters] = (counter[letters] || 0) + 1;
    console.log(counter[letters]);
  }
  for (let items of string2) {
    if (!counter[items]) {
      return "Not anagrams";
    }
    counter[items] -= 1;
  }
  console.log(counter);
  return "It's Anagrams";
}

const check = AnagramString("hello", "llheo");
console.log(check);

// ======================================================================================== //

// the time complexity is linear which means o(n)
