/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
     let unique = [...new Set(nums)]; 
    
    unique.sort((a, b) => b - a);
    
    return unique.length >= 3 ? unique[2] : unique[0];
};