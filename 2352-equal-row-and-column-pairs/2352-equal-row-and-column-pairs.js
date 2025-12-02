/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let n = grid.length;
    let count = 0;

    for (let i = 0; i < n; i++) {         
        for (let j = 0; j < n; j++) {      
            let match = true;
            for (let k = 0; k < n; k++) {  
                if (grid[i][k] !== grid[k][j]) {
                    match = false;
                    break;
                }
            }
            if (match) count++;
        }
    }

    return count;
};

