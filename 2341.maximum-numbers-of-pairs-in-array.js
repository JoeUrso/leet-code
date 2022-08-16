// Problem
// You are given a 0-indexed integer array nums. In one operation, you may do the following: Choose two integers in nums that are equal. Remove both integers from nums, forming a pair. The operation is done on nums as many times as possible. Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.

// Solution
const numberOfPairs = function (nums) {
    let pairs = 0;
    let leftovers = 0;
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let newValue = map.get(nums[i]) + 1;

            map.set(nums[i], newValue);
        } else {
            map.set(nums[i], 1);
        }
    }

    let size = map.size;
    let iterator = map.values();

    while (size > 0) {
        let value = iterator.next().value;

        if (value % 2 === 0) {
            pairs += value / 2;
            size--;
        } else {
            pairs += Math.trunc(value / 2);
            leftovers++;
            size--;
        }
    }

    return [pairs, leftovers];
};
