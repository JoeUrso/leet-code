// PROBLEM
// Given a string s consisting of lowercase English letters, return the first letter to appear twice.

// Note:
// A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b. s will contain at least one letter that appears twice.

// Solution
var repeatedCharacter = function (s) {
    let stack = new Set();
    let answer = "";

    stack.add(s[0]);

    for (i = 1; i < s.length; i++) {
        if (stack.has(s[i])) {
            answer = s[i];
            break;
        } else {
            stack.add(s[i]);
        }
    }

    return answer;
};
