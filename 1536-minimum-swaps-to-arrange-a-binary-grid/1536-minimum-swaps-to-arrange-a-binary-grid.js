/**
 * @param {number[][]} grid
 * @return {number}
 */
var minSwaps = function(grid) {
     const n = grid.length;
    const trailingZeros = grid.map(row => {
        let count = 0;
        for (let i = row.length - 1; i >= 0; i--) {
            if (row[i] === 0) count++;
            else break;
        }
        return count;
    });
    
    let swaps = 0;
    
    for (let i = 0; i < n; i++) {
        const required = n - 1 - i; 
        
        let found = -1;
        for (let j = i; j < n; j++) {
            if (trailingZeros[j] >= required) {
                found = j;
                break;
            }
        }
        
        if (found === -1) return -1;
        
        while (found > i) {
            [trailingZeros[found], trailingZeros[found - 1]] = 
            [trailingZeros[found - 1], trailingZeros[found]];
            found--;
            swaps++;
        }
    }
    
    return swaps;
};