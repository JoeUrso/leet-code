/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let stack = new Set();

    for (i = 0; i < nums.length; i++) {
        if (stack.has(nums[i])) {
            stack.delete(nums[i]);
        } else {
            stack.add(nums[i]);
        }
    }

    return stack.values().next().value;
};
// @lc code=end
