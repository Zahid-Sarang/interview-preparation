// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

function sortList(list1, list2) {
	return [...list1, ...list2].sort((a, b) => a - b);
}

const list1 = [];
const list2 = [];
console.log(sortList(list1, list2));
