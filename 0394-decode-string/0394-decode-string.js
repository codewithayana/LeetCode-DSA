/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
   const countStack = [];
    const stringStack = [];
    let currentNum = 0;
    let currentStr = '';

    for (const ch of s) {
        if (ch >= '0' && ch <= '9') {
          
            currentNum = currentNum * 10 + (ch.charCodeAt(0) - 48);
        } else if (ch === '[') {
            
            countStack.push(currentNum);
            stringStack.push(currentStr);
            currentNum = 0;
            currentStr = '';
        } else if (ch === ']') {
            const repeat = countStack.pop();
            const prevStr = stringStack.pop();
            currentStr = prevStr + currentStr.repeat(repeat);
        } else {
            
            currentStr += ch;
        }
    }

    return currentStr; 
};