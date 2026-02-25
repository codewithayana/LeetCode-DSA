/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
     const countBits = (n) => {
        let count = 0;
        while (n > 0) {
            count += n & 1;
            n >>= 1;
        }
        return count;
    };

    return arr.sort((a, b) => {
        const bitsA = countBits(a);
        const bitsB = countBits(b);

        if (bitsA !== bitsB) {
            return bitsA - bitsB;   
        }
        return a - b;               
    });
};