/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
      let n = score.length;
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push([score[i], i]);
    }

    arr.sort((a, b) => b[0] - a[0]);

    let result = new Array(n);

    for (let i = 0; i < n; i++) {
        let idx = arr[i][1];

        if (i === 0) {
            result[idx] = "Gold Medal";
        } else if (i === 1) {
            result[idx] = "Silver Medal";
        } else if (i === 2) {
            result[idx] = "Bronze Medal";
        } else {
            result[idx] = (i + 1).toString();
        }
    }

    return result;
};