/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let indexOccurrence = -1;

    if (!needle) {
        return 0;
    }

    for (i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            if (haystack[i] !== haystack[i - 1]) {
                indexOccurrence = i;
            }
            for (j = 1; j < needle.length; j++) {
                i++;

                if (haystack[i] !== needle[j]) {
                    indexOccurrence = -1;
                }
            }
        }
    }

    return indexOccurrence;
};
// @lc code=end
