/*
 * @lc app=leetcode id=1614 lang=javascript
 *
 * [1614] Maximum Nesting Depth of the Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let left = [];
    let right = [];
    let depth = 0;

    let newS = s.split("").join(".");

    for (i = 0; i < newS.length; i++) {
        if (newS[i] === "(") {
            left.push(1);
        } else if (newS[i] === ")") {
            right.push(1);
        } else {
            if (left.length - right.length > depth) {
                depth = left.length - right.length;
            }
        }
    }

    return depth;
};
// @lc code=end
