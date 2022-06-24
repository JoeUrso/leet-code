/*
 * @lc app=leetcode id=771 lang=javascript
 *
 * [771] Jewels and Stones
 */

// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let count = 0;

    for (i = 0; i < jewels.length; i++) {
        for (j = 0; j < stones.length; j++) {
            if (jewels[i] === stones[j]) {
                count++;
            }
        }
    }

    return count;
};
// @lc code=end
