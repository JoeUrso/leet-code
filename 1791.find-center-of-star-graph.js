/*
 * @lc app=leetcode id=1791 lang=javascript
 *
 * [1791] Find Center of Star Graph
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
    let result = 0;

    if (edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]) {
        result = edges[0][0];
    } else if (edges[0][1] === edges[1][0] || edges[0][1] === edges[1][1]) {
        result = edges[0][1];
    }

    return result;
};

// @lc code=end
