/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {};
// @lc code=end

// SOLUTIONS
// var mergeTwoLists = function (l1, l2) {
//     if (!l1 || !l2) return l1 ? l1 : l2;
//     if (l1.val < l2.val) {
//         l1.next = mergeTwoLists(l1.next, l2);
//         return l1;
//     } else {
//         l2.next = mergeTwoLists(l1, l2.next);
//         return l2;
//     }
// };

// const mergeTwoLists = function (l1, l2) {
//     const head = new ListNode(null);
//     let curr = head;
//     while (l1 && l2) {
//         if (l1.val < l2.val) {
//             curr.next = l1;
//             l1 = l1.next;
//         } else {
//             curr.next = l2;
//             l2 = l2.next;
//         }
//         curr = curr.next;
//     }
//     curr.next = l1 || l2;
//     return head.next;
// };

// let mergeTwoLists = function (l1, l2) {
//     let dummy = new ListNode(-1);
//     let head = dummy;

//     while (l1 !== null && l2 !== null) {
//         if (l1.val <= l2.val) {
//             dummy.next = l1;
//             l1 = l1.next;
//         } else {
//             dummy.next = l2;
//             l2 = l2.next;
//         }
//         dummy = dummy.next;
//     }

//     if (l1 !== null) {
//         dummy.next = l1;
//     } else {
//         dummy.next = l2;
//     }

//     return head.next;
// };

// class ListNode {
//     constructor(val = null, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
