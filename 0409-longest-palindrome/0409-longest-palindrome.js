/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
     let set = new Set();
    let length = 0;

    for (let char of s) {
        if (set.has(char)) {
            set.delete(char);
            length += 2;
        } else {
            set.add(char);
        }
    }

    if (set.size > 0) length += 1;

    return length;
};