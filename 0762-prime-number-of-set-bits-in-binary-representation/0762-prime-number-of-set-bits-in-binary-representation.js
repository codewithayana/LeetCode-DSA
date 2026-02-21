/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);

  let count = 0;

  for (let i = left; i <= right; i++) {
    let bits = 0;
    let n = i;

    while (n > 0) {
      bits += n & 1;
      n >>= 1;
    }

    if (primes.has(bits)) {
      count++;
    }
  }

  return count;
};