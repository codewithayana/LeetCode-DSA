/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    let seenZeroAfterOne = false;
    let seenOne = false;

    for (const ch of s) {
        if (ch === '1') {
            if (seenZeroAfterOne) return false; 
            seenOne = true;
        } else { 
            if (seenOne) seenZeroAfterOne = true;
        }
    }

    return true;
};