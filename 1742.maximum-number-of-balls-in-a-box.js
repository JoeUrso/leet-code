/*
 * @lc app=leetcode id=1742 lang=javascript
 *
 * [1742] Maximum Number of Balls in a Box
 */

// @lc code=start
/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
    let map = new Map();
    let answer = 0;

    for (i = lowLimit; i <= highLimit; i++) {
        let num = i;
        let sum = 0;

        while (num > 0) {
            sum += num % 10;
            num -= num % 10;
            num /= 10;
        }

        map.set(sum, map.get(sum) + 1 || 1);

        if (map.get(sum) > answer) {
            answer = map.get(sum);
        }
    }

    return answer;
};
// @lc code=end
