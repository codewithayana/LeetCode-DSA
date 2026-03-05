/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
     let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== String(i % 2)) {
            count++;
        }
    }
    
    return Math.min(count, s.length - count);
};