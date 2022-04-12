/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {};
// @lc code=end
// SOLUTIONS

// USING REDUCE
// var longestCommonPrefix = function(strs) {
//     return strs.reduce((prev, next) => {
//         let i = 0;
//         while (prev[i] && next[i] && prev[i] === next[i]) i++;
//         return prev.slice(0, i);
//     });
// };

// USING EVERY
// First find the shortest string in the array; the length of this string is the maximum length of our prefix
// this is because a prefix can't be longer than the word it inhabits
// Next we iterate from index 0 to maxPrefixLength - 1
// We use this index to check the corresponding character of each string together and compare them
// This is easily done using Array.every
// If all characters at index i match, then we add it to our prefix result string
// As soon as we hit one mismatch, that's the end of the common prefix and we break out of our loop
// return prefix at the end, which may be empty

// var longestCommonPrefix = function (strs) {
//     if (!strs.length) return "";
//     let prefix = "";
//     let maxPrefixLength = Math.min(...strs.map((str) => str.length));
//     for (let i = 0; i < maxPrefixLength; i++) {
//         let char = strs[0][i];
//         if (strs.every((str) => str[i] === char)) {
//             prefix += char;
//         } else {
//             break;
//         }
//     }
//     return prefix;
// };
