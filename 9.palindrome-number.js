/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let stringifiedNum = x.toString();

    let numToArray = stringifiedNum.split("");

    const reversedNumArray = [];

    numToArray.forEach((num) => {
        reversedNumArray.unshift(num);
    });

    const reversedNumArrayToString = reversedNumArray.join("");

    const reversedNum = +reversedNumArrayToString;

    if (x === reversedNum) {
        return true;
    } else {
        return false;
    }
};
// @lc code=end
