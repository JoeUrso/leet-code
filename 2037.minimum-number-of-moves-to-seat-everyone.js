/*
 * @lc app=leetcode id=2037 lang=javascript
 *
 * [2037] Minimum Number of Moves to Seat Everyone
 */

// @lc code=start
/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
    let sortedSeats = seats.sort((a, b) => a - b);
    let sortedStudents = students.sort((a, b) => a - b);
    let answer = 0;

    for (i = 0; i < sortedSeats.length; i++) {
        answer += Math.abs(sortedStudents[i] - sortedSeats[i]);
    }

    return answer;
};
// @lc code=end
