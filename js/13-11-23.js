"use strict";
/**
 * This problem was asked by Stripe.

Given an array of integers,
find the first missing positive integer in
linear time and constant space.
In other words, find the lowest positive integer
that does not exist in the array.
The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
 */
// solution one
function solution(numbers) {
    var minpos = 1;
    var uniques = new Set();
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            continue;
        }
        uniques.add(numbers[i]);
        if (numbers[i] === minpos) {
            minpos++;
            while (uniques.has(minpos)) {
                minpos++;
            }
        }
    }
    return minpos;
}
// solution two
function solution2(numbers) {
    var arr = [0];
    for (var i = 0; i < arr.length; i++) {
        if (numbers[i] < 0) {
            continue;
        }
        arr[numbers[i]] = numbers[i];
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === undefined) {
            return i;
        }
    }
    return arr.length;
}
var s1 = solution([3, 4, -1, 1]);
var s2 = solution([1, 2, 0]);
console.log(s1, s2);
var s3 = solution2([3, 4, -1, 1, 2]);
var s4 = solution2([1, 2, 0]);
console.log(s3, s4);
