var compactObject = function(obj) {
    if (obj === null) return null;

    if (Array.isArray(obj)) {
        const result = [];
        for (let item of obj) {
            const val = compactObject(item);
            if (val) result.push(val);
        }
        return result;
    }

    if (typeof obj === "object") {
        const result = {};
        for (let key in obj) {
            const val = compactObject(obj[key]);
            if (val) result[key] = val;
        }
        return result;
    }

    return obj ? obj : null;
};
