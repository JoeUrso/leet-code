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

    return nums.length;
};
// @lc code=end

// BEST SOLUTIONS

// Mutating the array via indexs
// var removeDuplicates = function(nums) {
//     let i = 0;
//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] != nums[i])
//             nums[++i] = nums[j];
//     }
//     return ++i;
// };

// Using splice
// var removeDuplicates = function(nums) {
//     for (i = 0; i < nums.length; i++) {
//         //Next number is identical to current one
//         if (nums[i] == nums[i+1]) {
//             nums.splice(i, 1);
//             i--;
//         }
//     }
// };
