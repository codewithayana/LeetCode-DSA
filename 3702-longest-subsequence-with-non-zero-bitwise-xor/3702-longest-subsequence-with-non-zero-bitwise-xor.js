/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
    let total = 0;
    for (let num of nums) {
        total = total ^ num;
    }
    
    if (total !== 0) {
        return nums.length;
    } else {
        let hasNonZero = nums.some(num => num !== 0);
        return hasNonZero ? nums.length - 1 : 0;
    }
};