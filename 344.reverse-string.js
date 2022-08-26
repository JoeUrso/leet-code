/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    //     s.reverse()

    const length = s.length;

    for (i = 0; i < length / 2; i++) {
        let first = s[i];
        let last = s[s.length - 1 - i];

        s[i] = last;
        s[s.length - 1 - i] = first;
    }
};
// @lc code=end
