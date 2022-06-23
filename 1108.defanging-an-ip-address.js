/*
 * @lc app=leetcode id=1108 lang=javascript
 *
 * [1108] Defanging an IP Address
 */

// @lc code=start
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
    let ipArr = address.split("");

    for (i = 0; i < ipArr.length; i++) {
        if (ipArr[i] === ".") {
            ipArr[i] = "[.]";
        }
    }

    return ipArr.join("");
};
// @lc code=end
