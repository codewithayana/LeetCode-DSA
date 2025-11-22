var flat = function(arr, n) {
    if (n === 0) return arr;

    let result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            result.push(...flat(item, n - 1)); 
        } else {
            result.push(item);
        }
    }

    return result;
};
