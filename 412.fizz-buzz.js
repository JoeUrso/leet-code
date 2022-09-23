/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let answer = [];

    for (i = 1; i <= n; i++) {
        let out = "";

        if (i % 3 === 0) {
            out += "Fizz";
        }

        if (i % 5 === 0) {
            out += "Buzz";
        }

        if (i % 3 !== 0 && i % 5 !== 0) {
            out = i.toString();
        }

        answer.push(out);
    }

    return answer;
};
// @lc code=end
