/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
   const MOD = 1000000007;

    if (n === 0) return 1;
    if (n === 1) return 1;
    if (n === 2) return 2;

    let dp0 = 1; 
    let dp1 = 1; 
    let dp2 = 2; 

    for (let i = 3; i <= n; i++) {
        let curr = (2 * dp2 + dp0) % MOD;
        dp0 = dp1;
        dp1 = dp2;
        dp2 = curr;
    }

    return dp2; 
};