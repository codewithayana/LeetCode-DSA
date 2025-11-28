/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    left = 0;
    right = 0;
    zeroCount = 0;
    best = 0;

    for (let right = 0; right < nums.length; right++){
        if (nums[right] === 0){
            zeroCount++;
        }
        while (zeroCount > 1){
            if (nums[left] === 0){
                zeroCount--;
            }
            left++;
        }
        best = Math.max(best, right - left);
    }
    return best;
};