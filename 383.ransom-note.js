// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let magazineMap = new Map();

    for (let letter of magazine) {
        magazineMap.set(letter, (magazineMap.get(letter) || 0) + 1);
    }

    for (let letter of ransomNote) {
        if (!magazineMap.has(letter) || magazineMap.get(letter) === 0) {
            return false;
        }
        magazineMap.set(letter, magazineMap.get(letter) - 1);
    }

    return true;
};
