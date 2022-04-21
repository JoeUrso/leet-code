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
    nums.reduce((previousValue, currentValue) => {
        if (previousValue === currentValue) {
            nums.shift(nums[0]);
            if (nums.pop() === nums[0]) {
                nums.push(currentValue);
            }
        } else {
            nums.shift(nums[0]);
        }
    });

    return nums;
};
// @lc code=end

// Maybe?

// nums.reduce((previousValue, currentValue) => {
//     let itemsToRemove = 0
//     console.log(previousValue)
//     if (previousValue === currentValue) {
// //             nums.shift(nums[0]);
//         itemsToRemove++
//         console.log(nums)
//     } else if (previousValue !== currentValue) {
//         itemsToRemove++
//         nums.push(nums[0])
//         console.log(nums)
//     }

//     for (i = 0; i <= itemsToRemove; i++) {
//         nums.shift[0]
//     }

// Other ideas?
// var removeDuplicates = function (nums) {

//     for (i = 0; i < nums.length; i++) {
//         let previous = nums[0]
//     let current = nums[1]

//         if (previous === current) {
//             nums.shift(nums[0]);
//             if (previous === nums[0]) {
//                 nums.push(current);
//         } else {
//             nums.shift(nums[0]);
//     };
//     };
// }

//     return nums;
// };

// var removeDuplicates = function (nums) {
//     nums.reduce((previousValue, currentValue) => {
//         if (previousValue === currentValue) {
//             nums.shift(nums[0]);
//             console.log(nums)
//         } else if (previousValue !== currentValue) {
//             let numToPush = nums.shift(nums[0]);
//             nums.push(numToPush)
//             console.log(nums)
//         }
//     });

//     return nums;
// };
