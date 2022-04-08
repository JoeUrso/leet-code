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
// For instance, if x = 123
// you loop through 123
// the Math.Floor part will give you 12 (12.3 rounded down), then 1 (1.2 rounded down) as it loops - think of this as the loop "holding" the 12 and then the 1 to be referenced on the next loop
// The statement will give you the previous rev times 10 (so 0 the first time, 3 the second time, 2 the third) plus the remainder of the number being held
// So on the first pass, rev will be changed to 3 (0+3)
// Second pass rev will be changed to 32 (30 + 2)
// The third pass rev will be changed to 321 (320 + 1)

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
