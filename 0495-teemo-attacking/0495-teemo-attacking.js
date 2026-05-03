/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
     if (timeSeries.length === 0) return 0;

    let total = 0;

    for (let i = 0; i < timeSeries.length - 1; i++) {
        let gap = timeSeries[i + 1] - timeSeries[i];
        total += Math.min(gap, duration);
    }

    total += duration;

    return total;
};