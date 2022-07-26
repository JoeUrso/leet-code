/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buyPrice = prices[0];
    let answer = 0;

    for (i = 0; i < prices.length - 1; i++) {
        let currentProfit = prices[i + 1] - prices[i];

        if (currentProfit > 0) {
            if (prices[i] < buyPrice) {
                buyPrice = prices[i];
            }
            if (prices[i + 1] - buyPrice > answer) {
                answer = prices[i + 1] - buyPrice;
            }
        }
    }

    return answer;
};
// @lc code=end

// Your first solution: brute force, O(n^2)
// var maxProfit = function(prices) {
//     let answer = 0

//     for (i = 0; i < prices.length; i++) {
//         for (j = i + 1; j < prices.length; j++)
//             if (prices[j] - prices[i] > answer) {
//                 answer = prices[j] - prices[i]
//             }
//     }

//     return answer

// };
