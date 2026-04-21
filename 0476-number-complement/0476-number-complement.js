/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    return num ^ ((1 << (Math.floor(Math.log2(num)) + 1)) - 1);
};