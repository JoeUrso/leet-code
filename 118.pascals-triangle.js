/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let numArr = Array(numRows);

    for (i = 0; i < numRows; i++) {
        let newRow = Array(i + 1);
        newRow[0] = 1;
        newRow[newRow.length - 1] = 1;

        for (j = 1; j < newRow.length - 1; j++) {
            let prevRow = numArr[i - 1];

            newRow[j] = prevRow[j] + prevRow[j - 1];
        }

        numArr[i] = newRow;
    }
    return numArr;
};
// @lc code=end
