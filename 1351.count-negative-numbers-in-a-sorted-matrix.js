/*
 * @lc app=leetcode id=1351 lang=javascript
 *
 * [1351] Count Negative Numbers in a Sorted Matrix
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let answer = 0;

    for (i = 0; i < grid.length; i++) {
        for (j = 0; j < grid[i].length; j++) {
            if (Math.sign(grid[i][j]) === -1) {
                answer++;
            }
        }
    }

    return answer;
};
// @lc code=end

// BETTER SOLUTIONS
// var countNegatives = function(grid) {
//     return grid.flat().filter(ele => ele < 0).length;
// 	// Time Complexity: O(m*n)
//     // Space Complexity: O(n)
// };
