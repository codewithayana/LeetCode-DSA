/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num >= 10) {
    let sum = 0;
    for (const digit of String(num)) {
      sum += Number(digit);
    }
    num = sum;
  }
  return num;
};