/*
 * @lc app=leetcode id=1217 lang=javascript
 *
 * [1217] Minimum Cost to Move Chips to The Same Position
 */

// @lc code=start
/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
    let even = 0;
    let odd = 0;

    for (i = 0; i < position.length; i++) {
        if (position[i] % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }

    if (even - odd === 0) {
        return 1 * even;
    } else if (even > odd) {
        return odd * 1;
    } else {
        return even * 1;
    }
};
// @lc code=end
