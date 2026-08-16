/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function(stones) {
   let cnt = [0, 0, 0];

    for (let stone of stones) {
        cnt[stone % 3]++;
    }
    if (cnt[0] % 2 === 1) {
        return Math.abs(cnt[1] - cnt[2]) > 2;
    }
    return cnt[1] > 0 && cnt[2] > 0; 
};