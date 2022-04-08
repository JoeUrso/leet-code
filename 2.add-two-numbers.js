/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const stringifiedL1 = l1.join("");
    const stringifiedL2 = l2.join("");

    const numberfiedL1 = +stringifiedL1;
    const numberfiedL2 = +stringifiedL2;

    const total = numberfiedL1 + numberfiedL2;

    const stringifiedTotal = total.toString();

    const totalArray = stringifiedTotal.split("");

    let reversedTotalArray = [];

    totalArray.forEach((num) => {
        let numberfiedNum = +num;
        reversedTotalArray.unshift(numberfiedNum);
    });

    return reversedTotalArray;
};
// @lc code=end
