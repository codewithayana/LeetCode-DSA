/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    let result = [];

    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {

            let bits =
            h.toString(2).split("1").length - 1+
            m.toString(2).split("1").length - 1;

            if (bits === turnedOn) {
                result.push(h + ":" + m.toString().padStart(2 , "0"));
            }
        }
    }
    return result;
};