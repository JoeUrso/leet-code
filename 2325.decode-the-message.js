// PROBLEM

// You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows: Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table. Align the substitution table with the regular English alphabet. Each letter in message is then substituted using the table. Spaces ' ' are transformed to themselves. For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f'). Return the decoded message.

// SOLUTION
/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    let alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    let usedLetters = [];
    let subTable = {};
    let answer = "";

    for (i = 0; i < key.length; i++) {
        if (key[i] === " ") {
            continue;
        }

        if (!usedLetters.includes(key[i])) {
            subTable[key[i]] = alphabet[0];
            alphabet.shift();
            usedLetters.push(key[i]);
        }
    }

    for (i = 0; i < message.length; i++) {
        if (message[i] === " ") {
            answer += " ";
        } else {
            answer += subTable[message[i]];
        }
    }

    return answer;
};
