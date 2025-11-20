/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(otherVal) {
            if (val !== otherVal) {
                throw "Not Equal";
            }
            return true;
        },
        notToBe: function(otherVal) {
            if (val === otherVal) {
                throw "Equal";
            }
            return true;
        }
    };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */