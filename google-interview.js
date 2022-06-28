// Question 1
// Given 2 strings, find the set intersections
// input: "facts", "stick"
// output: "cts"

// Solution 1 - 0(n^2)
const intersection = (str1, str2) => {
    let answer = "";

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                answer += str1[i];
            }
        }
    }
    return answer;
};

// Solution 2 - O(n)
const intersection2 = (str1, str2) => {
    let answer = "";
    let set = new Set(str2);

    for (let i = 0; i < str1.length; i++) {
        if (set.has(str1[i])) {
            answer += str1[i];
        }
    }
    return answer;
};

// Question 2
// Given an object whose values are primitive data types, turn it into a string
// input: {a: 1, b: 2}
// output: "{a: 1, b: 2}"

// Solution - 0(n)
const stringify = (obj) => {
    let entries = Object.entries(obj);
    let answer = [];

    for (i = 0; i < entries.length; i++) {
        if (!answer[0]) {
            answer.push(
                "{" + entries[i][0] + ":" + entries[i][1].toString() + ","
            );
        } else if (i === entries.length - 1) {
            answer.push(entries[i][0] + ":" + entries[i][1].toString() + "}");
        } else {
            answer.push(entries[i][0] + ":" + entries[i][1].toString() + ",");
        }
    }

    return answer.join(" ");
};
