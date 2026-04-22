/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let str = s.replace(/-/g, '').toUpperCase();
    
    let res = '';
    let count = 0;

    for (let i = str.length - 1; i >= 0; i--) {
        res = str[i] + res;
        count++;

        if (count === k && i !== 0) {
            res = '-' + res;
            count = 0;
        }
    }

    return res;
};