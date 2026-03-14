/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
      if (!s || !words.length) return [];

    const wordLen = words[0].length;
    const wordCount = words.length;
    const windowLen = wordLen * wordCount;
    const result = [];

    
    const wordMap = {};
    for (let word of words) {
        wordMap[word] = (wordMap[word] || 0) + 1;
    }

    for (let i = 0; i <= s.length - windowLen; i++) {
        const seen = {};
        let j = 0;

        while (j < wordCount) {
            const word = s.substr(i + j * wordLen, wordLen);

            if (wordMap[word]) {
                seen[word] = (seen[word] || 0) + 1;

                if (seen[word] > wordMap[word]) break;
            } else {
                break; 
            }
            j++;
        }

        if (j === wordCount) result.push(i);
    }

    return result;
};