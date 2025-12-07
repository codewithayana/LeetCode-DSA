/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let count = 0;

    function dfs(node, maxSoFar) {
        if (!node) return;

        if (node.val >= maxSoFar) {
            count++;
        }

        
        const newMax = Math.max(maxSoFar, node.val);
 
        dfs(node.left, newMax);
        dfs(node.right, newMax);
    }

    dfs(root, root.val);  
    return count;
};

