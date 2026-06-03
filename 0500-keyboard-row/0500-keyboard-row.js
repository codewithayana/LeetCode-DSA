/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const row1 = "qwertyuiop";
    const row2 = "asdfghjkl";
    const row3 = "zxcvbnm";

    const result = [];

    for (let word of words) {
        const lowerWord = word.toLowerCase();

        let row;

        if (row1.includes(lowerWord[0])) {
            row = row1;
        } else if (row2.includes(lowerWord[0])) {
            row = row2;
        } else {
            row = row3;
        }

        let valid = true;

        for (let char of lowerWord) {
            if (!row.includes(char)) {
                valid = false;
                break;
            }
        }

        if (valid) {
            result.push(word);
        }
    }

    return result;
};