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
var longestZigZag = function(root) {
    let maxLen = 0;

    function dfs(node, isLeft, length) {
        if (!node) return;

        maxLen = Math.max(maxLen, length);

        if (isLeft === true) {
            dfs(node.right, false, length + 1);

            dfs(node.left, true, 1);
        } else {
            dfs(node.left, true, length + 1);

            dfs(node.right, false, 1);
        }
    }

    dfs(root.left, true, 1);  
    dfs(root.right, false, 1);

    return maxLen;
};
