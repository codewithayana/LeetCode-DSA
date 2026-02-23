/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    const needed = 1 << k;   
    const seen = new Set();

    for (let i = 0; i + k <= s.length; i++) {
        const sub = s.slice(i, i + k);
        seen.add(sub);
        if (seen.size === needed) return true; 
    }

    return false;
};