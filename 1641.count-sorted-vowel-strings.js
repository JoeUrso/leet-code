/*
 * @lc app=leetcode id=1641 lang=javascript
 *
 * [1641] Count Sorted Vowel Strings
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
    let answer = 0;

    helper(n, 0);

    function helper(n, startIndex) {
        if (n === 0) {
            answer++;
            return;
        }

        for (let i = startIndex; i < 5; i++) {
            helper(n - 1, i);
        }
    }

    return answer;
};
// @lc code=end

// Clever Solution
// var countVowelStrings = function (n) {
//     let a = 1,
//         e = 1,
//         i = 1,
//         o = 1,
//         u = 1;
//     while (n-- > 1) {
//         a = a + e + i + o + u;
//         e = e + i + o + u;
//         i = i + o + u;
//         o = o + u;
//         u = u;
//     }
//     return a + e + i + o + u;
// };
