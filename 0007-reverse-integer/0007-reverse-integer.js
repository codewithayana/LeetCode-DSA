/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MAX = 2 ** 31 - 1; 
    const INT_MIN = -(2 ** 31);

    let sign = x < 0 ? -1 : 1;
    let num = Math.abs(x);
    let reversed = 0;

    while (num > 0) {
        const digit = num % 10;
        num = Math.floor(num / 10);

      
        if (reversed > Math.floor(INT_MAX / 10) || 
           (reversed === Math.floor(INT_MAX / 10) && digit > 7)) {
            return 0;
        }

        reversed = reversed * 10 + digit;
    }

    return reversed * sign;
};