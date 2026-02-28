/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
    const MOD = BigInt(1e9 + 7);
    let result = BigInt(0);
    
    for (let i = 1; i <= n; i++) {
        const bits = BigInt(i.toString(2).length); 
        result = ((result << bits) | BigInt(i)) % MOD;
    }
    
    return Number(result);
};