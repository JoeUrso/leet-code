// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let output = [];

    for (let first = 0; first < nums.length - 2; first++) {
        if (first > 0 && nums[first] === nums[first - 1]) continue;
        let second = first + 1;
        let third = nums.length - 1;

        while (second < third) {
            const sum = nums[first] + nums[second] + nums[third];
            if (sum === 0) {
                output.push([nums[first], nums[second], nums[third]]);
                while (nums[second] === nums[second + 1]) second++;
                while (nums[third] === nums[third - 1]) third--;
                second++;
                third--;
            } else if (sum < 0) {
                second++;
            } else {
                third--;
            }
        }
    }

    return output;
};
