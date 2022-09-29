/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const res = new Array(nums.length + 1).fill(-1);

    for (const num of nums) {
        res[num] = num;
    }

    return res.indexOf(-1);
};
// @lc code=end
