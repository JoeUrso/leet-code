// Examples
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

var addTwoNumbers = function (l1, l2) {
    const stringifiedL1 = l1.join("");
    const stringifiedL2 = l2.join("");

    const numberfiedL1 = +stringifiedL1;
    const numberfiedL2 = +stringifiedL2;

    const total = numberfiedL1 + numberfiedL2;

    const stringifiedTotal = total.toString();

    const totalArray = stringifiedTotal.split("");

    let reversedTotalArray = [];

    totalArray.forEach((num) => {
        let numberfiedNum = +num;
        reversedTotalArray.unshift(numberfiedNum);
    });

    return reversedTotalArray;
};
