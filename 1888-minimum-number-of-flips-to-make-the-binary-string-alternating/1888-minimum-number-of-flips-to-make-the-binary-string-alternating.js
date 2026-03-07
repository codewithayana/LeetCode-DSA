/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function(s) {
   let n = s.length;
    let str = s + s;

    let alt1 = "";
    let alt2 = "";

    for (let i = 0; i < str.length; i++) {
        alt1 += i % 2 ? "1" : "0";
        alt2 += i % 2 ? "0" : "1";
    }

    let res = Infinity;
    let diff1 = 0, diff2 = 0;
    let left = 0;

    for (let right = 0; right < str.length; right++) {

        if (str[right] !== alt1[right]) diff1++;
        if (str[right] !== alt2[right]) diff2++;

        if (right - left + 1 > n) {
            if (str[left] !== alt1[left]) diff1--;
            if (str[left] !== alt2[left]) diff2--;
            left++;
        }

        if (right - left + 1 === n) {
            res = Math.min(res, diff1, diff2);
        }
    }

    return res;
};