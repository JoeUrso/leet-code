/*
 * @lc app=leetcode id=2089 lang=javascript
 *
 * [2089] Find Target Indices After Sorting Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
    let sortedNums = nums.sort((a, b) => a - b);
    let foundIndices = [];

    for (i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] === target) {
            foundIndices.push(i);
        }
    }

    return foundIndices.sort((a, b) => a - b);
};
// @lc code=end
