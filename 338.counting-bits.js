/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
const makeBinary = function (num) {
    let newNum = num;
    let binary = [];

    while (newNum !== 0) {
        let quotient = newNum / 2;
        let bit = newNum % 2;

        binary.unshift(bit);

        newNum = Math.floor(quotient);
    }
    return binary;
};

var countBits = function (n) {
    let ans = [];

    for (i = 0; i <= n; i++) {
        let binary = makeBinary(i);
        let foundOnes = 0;

        binary.forEach((bit) => {
            if (bit === 1) {
                foundOnes++;
            }
        });

        ans.push(foundOnes);
    }

    return ans;
};

// console.log("Hello World");
// console.log(makeBinary(5));
// console.log(countBits(2));
// @lc code=end

// Best solution
// function countBits(num: number): number[] {
//     const res = new Uint8Array(num + 1);
//     for (let i = 0; i < res.length; i++) res[i] = res[i >> 1] + (i & 1);
//     return [...res];
// }
