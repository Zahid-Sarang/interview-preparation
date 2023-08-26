/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numIndices = {};  // Use this to save the indices of the numbers

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];  // Calculate the number needed to complete the pair
          
        if (numIndices[complement] !== undefined) {  // If this number is in our object, we found a pair!
            return [numIndices[complement], i];  // Return the stored index and the current index
        }

        // Store the current number's index in our object
        numIndices[nums[i]] = i;
        console.log(numIndices)
    }
    
    return [];  // In case no solution exists (though it's not mentioned in the problem, it's safe to add)
};

twoSum([2,7,11,15],9)