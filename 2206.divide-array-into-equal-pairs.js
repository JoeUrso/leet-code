/*
 * @lc app=leetcode id=2206 lang=javascript
 *
 * [2206] Divide Array Into Equal Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    const numMap = new Map();
    for (const num of nums) {
        numMap.has(num) ? numMap.delete(num) : numMap.set(num, true);
    }
    return numMap.size === 0;
};
// @lc code=end
