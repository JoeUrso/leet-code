/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let currentNum = 0;
    let prevNum = 0;
    let convertedToInt = 0;

    let stringToArr = s.split("");

    stringToArr.forEach((romanNumeral) => {
        prevNum = currentNum;
        currentNum = 0;
        switch (romanNumeral) {
            case "I":
                currentNum += 1;
                break;
            case "V":
                currentNum += 5;
                break;
            case "X":
                currentNum += 10;
                break;
            case "L":
                currentNum += 50;
                break;
            case "C":
                currentNum += 100;
                break;
            case "D":
                currentNum += 500;
                break;
            case "M":
                currentNum += 1000;
                break;
        }

        if (prevNum === 1 && currentNum === 5) {
            convertedToInt += 3;
        } else if (prevNum === 1 && currentNum === 10) {
            convertedToInt += 8;
        } else if (prevNum === 10 && currentNum === 50) {
            convertedToInt += 30;
        } else if (prevNum === 10 && currentNum === 100) {
            convertedToInt += 80;
        } else if (prevNum === 100 && currentNum === 500) {
            convertedToInt += 300;
        } else if (prevNum === 100 && currentNum === 1000) {
            convertedToInt += 800;
        } else {
            convertedToInt += currentNum;
        }
    });

    return convertedToInt;
};
// @lc code=end

// Best Solution

// symbols = {
//     "I": 1,
//     "V": 5,
//     "X": 10,
//     "L": 50,
//     "C": 100,
//     "D": 500,
//     "M": 1000
// };

// var romanToInt = function(s) {
//     value = 0;
//     for(let i = 0; i < s.length; i+=1){
//         symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
//     }
//     return value
// };
