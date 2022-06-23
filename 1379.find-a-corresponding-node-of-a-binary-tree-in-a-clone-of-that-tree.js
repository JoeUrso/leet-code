/*
 * @lc app=leetcode id=1379 lang=javascript
 *
 * [1379] Find a Corresponding Node of a Binary Tree in a Clone of That Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
    dfs = (ori, clo, tar) => {
        if (!ori) {
            return null;
        } else if (ori === target) {
            return clo;
        }

        const traverse = dfs(ori.left, clo.left, tar);
        if (traverse) {
            return traverse;
        }
        return dfs(ori.right, clo.right, tar);
    };

    return dfs(original, cloned, target);
};
// @lc code=end
