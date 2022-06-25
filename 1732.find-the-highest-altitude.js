/*
 * @lc app=leetcode id=1732 lang=javascript
 *
 * [1732] Find the Highest Altitude
 */

// @lc code=start
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let altitudes = [0];

    for (i = 0; i < gain.length; i++) {
        altitudes.push(gain[i] + altitudes[i]);
    }

    let findHighest = altitudes.sort((a, b) => b - a);
    return findHighest[0];
};
// @lc code=end
