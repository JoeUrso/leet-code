/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n, prevValues = []) {
    let result;

    if (prevValues[n] != null) {
        return prevValues[n];
    }

    if (n <= 0) {
        result = 0;
    } else if (n > 0 && n <= 2) {
        result = 1;
    } else {
        result = fib(n - 1, prevValues) + fib(n - 2, prevValues);
    }
    prevValues[n] = result;

    return result;
};
// @lc code=end
