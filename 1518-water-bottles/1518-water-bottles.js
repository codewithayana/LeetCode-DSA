/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
     let drank = numBottles;
    let empty = numBottles;

    while (empty >= numExchange) {
        const newBottles = Math.floor(empty / numExchange);
        drank += newBottles;
        empty = empty % numExchange + newBottles;
    }

    return drank;
};