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

// BEST SOLUTION
// Use a varibale to reverse number then check with given number

// var isPalindrome = function(x) {
//   if (x < 0) return false

//   let rev = 0
//   for(let i = x; i >= 1; i = Math.floor(i/10)) rev = rev*10 + i%10
//   return rev === x
// };

// BETTER WAY TO DO YOUR ANSWER
// var isPalindrome = function (x) {
//     let reversed = x.toString().split("").reverse().join("");
//     return x === +reversed;
// };
