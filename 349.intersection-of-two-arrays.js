/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const map = new Map();
    for (const n of nums1) {
        if (map.has(n)) {
            map.set(n, map.get(n) + 1);
        } else {
            map.set(n, 1);
        }
    }
    const out = [];
    for (const n of nums2) {
        if (map.has(n) && map.get(n) > 0) {
            out.push(n);
            map.set(n, map.get(n) - 1);
        }
    }
    return out;
};
// @lc code=end
