/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sMap = new Map();
    const tMap = new Map();
    let out = true;

    for (i = 0; i < s.length; i++) {
        if (sMap.has(s[i])) {
            let tmp = sMap.get(s[i]);
            sMap.set(s[i], tmp + 1);
        } else {
            sMap.set(s[i], 1);
        }
    }

    for (i = 0; i < t.length; i++) {
        if (tMap.has(t[i])) {
            let tmp = tMap.get(t[i]);
            tMap.set(t[i], tmp + 1);
        } else {
            tMap.set(t[i], 1);
        }
    }

    sMap.forEach((value, key) => {
        if (sMap.get(key) !== tMap.get(key)) {
            out = false;
        }
    });

    return out;
};
// @lc code=end
