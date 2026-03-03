/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    if (n === 1) return "0";
    
    const mid = Math.pow(2, n - 1);
    
    if (k === mid) return "1";
    
    if (k < mid) {
        return findKthBit(n - 1, k);
    } else {

        const mirrored = mid - (k - mid);
        const bit = findKthBit(n - 1, mirrored);
        
        return bit === "0" ? "1" : "0";
    }
};