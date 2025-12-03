/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
   let stack = [];

    for (let a of asteroids) {
        
        while (
            stack.length > 0 &&
            stack[stack.length - 1] > 0 &&
            a < 0
        ) {
            let top = stack[stack.length - 1];

            if (top < -a) {
               
                stack.pop();
                continue; 
            } else if (top === -a) {
               
                stack.pop();
                a = 0; 
                break;
            } else {
                
                a = 0;
                break;
            }
        }

        if (a !== 0) {
            stack.push(a);
        }
    }

    return stack; 
};