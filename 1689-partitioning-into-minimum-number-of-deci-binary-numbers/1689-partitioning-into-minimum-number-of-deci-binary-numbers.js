/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
     let maxDigit = 0;

  for (const ch of n) {
    maxDigit = Math.max(maxDigit, ch - '0');
  }

  return maxDigit;
};