/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let indexZero = 0;
    let indexOne = 0;
    let prevF1 = null;
    let prevF2 = null;
    let hold = null;

    const finalCost = (cost, f1, f2) => {
        return cost + Math.min(f1, f2);
    };

    if (cost.length === 2) {
        return Math.min(cost[0], cost[1]);
    }

    for (i = cost.length - 1; i >= 0; i--) {
        console.log([prevF1, prevF2]);

        if (prevF1 === null) {
            prevF1 = finalCost(cost[i], 0, 0);
        } else if (prevF2 === null) {
            prevF2 = prevF1;
            prevF1 = finalCost(cost[i], prevF1, 0);
        } else {
            hold = prevF1;
            prevF1 = finalCost(cost[i], prevF1, prevF2);
            prevF2 = hold;
            console.log([prevF1, prevF2]);

            if (i === 0) {
                indexOne = prevF2;
                indexZero = prevF1;
            }
        }
    }

    return Math.min(indexZero, indexOne);
};
// @lc code=end
