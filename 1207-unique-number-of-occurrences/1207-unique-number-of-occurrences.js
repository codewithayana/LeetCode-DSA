/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let freq = {};
     for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
     let occurrences = Object.values(freq);
    let unique = new Set(occurrences);

    return unique.size === occurrences.length;
};