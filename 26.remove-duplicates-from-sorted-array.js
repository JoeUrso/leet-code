/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const initialNumsLength = nums.length;
    let itemsToRemove = 0;

    for (i = 0; i < initialNumsLength; i++) {
        let current = nums[i];
        let next = nums[i + 1];

        if (next === current) {
            itemsToRemove++;
        } else if (next !== current) {
            itemsToRemove++;
            nums.push(current);
        }
    }

    while (itemsToRemove > 0) {
        nums.shift();
        itemsToRemove--;
    }

    return nums;
};
// @lc code=end
