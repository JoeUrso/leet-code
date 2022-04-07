/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let answer = [];

    for (let i = 0; i < nums.length; i++) {
        let nextIndex = 1;

        nums.forEach((num) => {
            if (nums[i] + nums[i + nextIndex] === target) {
                return (answer = [i, i + nextIndex]);
            } else {
                nextIndex++;
            }
        });
    }
    return answer;
};
// @lc code=end
