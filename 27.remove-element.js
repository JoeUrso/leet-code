/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i = i - 1;
        }
    }

    return nums.length;
};
// @lc code=end

// BEST SOLTUIONS
// var removeElement = function(nums, val) {
//     var zeroStartIdx = 0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]!==val){
//             nums[zeroStartIdx]=nums[i];
//             zeroStartIdx++
//         }
//     }
//     return zeroStartIdx;
// };
