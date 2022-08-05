/*
 * @lc app=leetcode id=1431 lang=javascript
 *
 * [1431] Kids With the Greatest Number of Candies
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let mostCandies = 0;
    let answer = [];

    candies.forEach((num) => {
        if (num > mostCandies) {
            mostCandies = num;
        }
    });

    for (i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= mostCandies) {
            answer.push(true);
        } else {
            answer.push(false);
        }
    }

    return answer;
};
// @lc code=end
