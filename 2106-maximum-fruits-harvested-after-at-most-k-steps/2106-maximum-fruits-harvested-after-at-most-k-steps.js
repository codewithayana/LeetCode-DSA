/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function(fruits, startPos, k) {
   const n = fruits.length;

    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + fruits[i][1];
    }

    let ans = 0;
    let l = 0;

    for (let r = 0; r < n; r++) {
        while (l <= r) {
            const leftPos = fruits[l][0];
            const rightPos = fruits[r][0];

            let cost;
            if (rightPos <= startPos) {
                cost = startPos - leftPos;
            } else if (leftPos >= startPos) {
                cost = rightPos - startPos;
            } else {
                cost = Math.min(
                    (startPos - leftPos) * 2 + (rightPos - startPos),
                    (rightPos - startPos) * 2 + (startPos - leftPos)
                );
            }

            if (cost <= k) break;
            l++;
        }

        ans = Math.max(ans, prefix[r + 1] - prefix[l]);
    }

    return ans;
};