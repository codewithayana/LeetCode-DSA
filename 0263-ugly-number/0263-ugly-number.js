/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n <= 0) return false;

    const factors = [2, 3, 5];

    for (let f of factors) {
        while (n % f === 0) {
            n = n / f;
        }
    }

    return n === 1;
};