/*
 * @lc app=leetcode id=1221 lang=javascript
 *
 * [1221] Split a String in Balanced Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let r = 0;
    let l = 0;
    let answer = 0;

    for (i = 0; i < s.length + 1; i++) {
        console.log([r, l, answer, i]);
        if (r > 0 && r === l) {
            answer++;
            r = 0;
            l = 0;
        }

        if (s[i] === "R") {
            r++;
        } else {
            l++;
        }
    }

    return answer;
};
// @lc code=end
