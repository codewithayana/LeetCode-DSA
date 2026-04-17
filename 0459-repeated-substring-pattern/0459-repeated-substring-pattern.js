/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let doubled = s + s;
    let trimmed = doubled.slice(1, -1);
    return trimmed.includes(s);
};