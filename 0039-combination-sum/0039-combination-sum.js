/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
     const results = [];

    const backtrack = (start, current, remaining) => {
        if (remaining === 0) {
            results.push([...current]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            const num = candidates[i];

            if (num > remaining) continue;

            current.push(num);
            backtrack(i, current, remaining - num); 
            current.pop();                         
        }
    };

    candidates.sort((a, b) => a - b); 
    backtrack(0, [], target);
    return results;
};