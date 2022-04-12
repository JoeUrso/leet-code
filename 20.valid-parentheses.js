/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {};
// @lc code=end

// SOLUTIONS
// Iterate over all characters of the input;
// IF we encounter an open bracket, then we push it to our temporary array
// - 1. iteration: stack = "}"
// - 2. iteration: stack = "}]"
// ELSE (we encounter a closed bracket) we get the last element from the stack (pop()) and check if it is the counterpart of the current character at hand
// - 3. iteration: stack = "}" AND "]" (pop()) matches "]" (current character)
// So the idea is to build a parallel structure which then has to be a mirror of the "other half"

// var isValid = function(s) {
//     const stack = [];

//     for (let i = 0 ; i < s.length ; i++) {
//         let c = s.charAt(i);
//         switch(c) {
//             case '(': stack.push(')');
//                 break;
//             case '[': stack.push(']');
//                 break;
//             case '{': stack.push('}');
//                 break;
//             default:
//                 if (c !== stack.pop()) {
//                     return false;
//                 }
//         }
//     }

//     return stack.length === 0;
// };

// SOLUTION #2
// if (s.length === 0) return true
// if (s.length === 1) return false
// if (s.length % 2 !== 0) return false

// const dictionary = {
// 	'}': '{',
// 	')': '(',
// 	']': '['
// }
// const stack = []

// for (let i = 0; i < s.length; i++) {
// 	const currChar = s[i]
// 	const lastChar = stack[stack.length - 1]
// 	const delChar = dictionary[currChar]

// 	if (delChar) {

// 		if (delChar === lastChar) {
// 			stack.pop()
// 		} else {
// 			return false
// 		}
// 	} else {
// 		stack.push(currChar)
// 	}
// }

// return !stack.length
