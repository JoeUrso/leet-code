/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const memo = [1, 1, 2];

    for (let i = 3; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }

    return memo[n];
};
// @lc code=end

// RECURSION SOLUTION
// var climbStairs = function (n, memo = new Array()) {
//     if (n === 1) {
//         return 1;
//     }
//     if (n === 2) {
//         return 2;
//     }
//     if (memo[n] !== undefined) {
//         return memo[n];
//     }
//     let res = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
//     memo[n] = res;
//     return res;
//     // T.C: O(N)
//     // S.C: O(N)
// };
