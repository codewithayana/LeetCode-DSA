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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if (!root) return 0;

    const countPathsFromNode = (node, sum) => {
        if (!node) return 0;
        let count = 0;
        if (node.val === sum) count++;  
        count += countPathsFromNode(node.left, sum - node.val);
        count += countPathsFromNode(node.right, sum - node.val);
        return count;
    };

    return countPathsFromNode(root, targetSum)
           + pathSum(root.left, targetSum)
           + pathSum(root.right, targetSum);
};

