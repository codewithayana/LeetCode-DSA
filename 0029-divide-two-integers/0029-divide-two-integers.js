/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const MAX = 2147483647;
    const MIN = -2147483648;

    if (dividend === MIN && divisor === -1) return MAX;

    let dvd = BigInt(Math.abs(dividend));
    let dvs = BigInt(Math.abs(divisor));

    let result = 0n;

    while (dvd >= dvs) {
        let temp = dvs;
        let multiple = 1n;

        while (dvd >= (temp << 1n)) {
            temp <<= 1n;
            multiple <<= 1n;
        }

        dvd -= temp;
        result += multiple;
    }

    if ((dividend > 0) !== (divisor > 0)) {
        result = -result;
    }

    return Number(result);
};