/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s;

    let start = 0, maxLen = 1;

    const expand = (l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        return r - l - 1;
    };

    for (let i = 0; i < s.length; i++) {
        let len1 = expand(i, i);    
        let len2 = expand(i, i + 1); 
        let len = Math.max(len1, len2);

        if (len > maxLen) {
            maxLen = len;
            start = i - Math.floor((len - 1) / 2);
        }
    }

    return s.substring(start, start + maxLen);
};