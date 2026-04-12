/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let row = 0;

    while (n >= row + 1) {
        row++;
        n -= row;
    }

    return row;
};