/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function(stoneValue) {
    const n = stoneValue.length;
    const prefix = [0];

    for (let x of stoneValue) {
        prefix.push(prefix[prefix.length - 1] + x);
    }
 const dp = Array.from({ length: n }, () => Array(n).fill(0));

    for (let len = 2; len <= n; len++) {
        for (let l = 0; l + len <= n; l++) {
            let r = l + len - 1;

            for (let k = l; k < r; k++) {
                let left = prefix[k + 1] - prefix[l];
                let right = prefix[r + 1] - prefix[k + 1];
                if (left < right) {
                    dp[l][r] = Math.max(dp[l][r], left + dp[l][k]);
                } else if (left > right) {
                    dp[l][r] = Math.max(dp[l][r], right + dp[k + 1][r]);
                } else {
                    dp[l][r] = Math.max(
                        dp[l][r],
                        left + Math.max(dp[l][k], dp[k + 1][r])
                    );
                }
            }
        }
    }

    return dp[0][n - 1];
};