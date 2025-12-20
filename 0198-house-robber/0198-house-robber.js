/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let prev1 = 0; 
  let prev2 = 0; 

  for (let money of nums) {
    let curr = Math.max(prev1, prev2 + money);
    prev2 = prev1;
    prev1 = curr;
  }

  return prev1;
};