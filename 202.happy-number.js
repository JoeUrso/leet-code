/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let set = new Set();

    while (!set.has(n)) {
        set.add(n);
        let stringified = n.toString();
        n = 0;
        for (let i = 0; i < stringified.length; ++i) {
            n += Math.pow(stringified[i], 2);
        }
        if (n === 1) return true;
    }

    return false;
};
// @lc code=end
