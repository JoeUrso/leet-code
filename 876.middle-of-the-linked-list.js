/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let count = 0;
    let currentNode = head;
    let answer = 0;

    while (currentNode) {
        count++;
        currentNode = currentNode.next;
    }

    if (count % 2 === 0) {
        let moves = count / 2 - 1;
        let middleNode = head;

        for (i = 0; i <= moves; i++) {
            middleNode = middleNode.next;
        }

        answer = middleNode;
    } else {
        let moves = Math.floor(count / 2) - 1;
        let middleNode = head;

        for (i = 0; i <= moves; i++) {
            middleNode = middleNode.next;
        }

        answer = middleNode;
    }

    return answer;
};
// @lc code=end
