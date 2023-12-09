"use strict";
/**
 * This problem was asked by Facebook.

You are given an array of non-negative integers that represents a
two-dimensional elevation map where each element is unit-width wall
and the integer is the height. Suppose it will rain and all spots between two walls get filled up.

Compute how many units of water remain trapped on the map in O(N) time and O(1) space.

For example, given the input [2, 1, 2],
we can hold 1 unit of water in the middle.

Given the input [3, 0, 1, 3, 0, 5],
we can hold 3 units in the first index,
2 in the second, and 3 in the fourth index
(we cannot hold 5 since it would run off to the left), so we can trap 8 units of water.
 */
(function () {
    function getTrappedWaterUnit(elevationMap) {
        var totalWater = 0;
        var leftMax = 0;
        var rightMax = 0;
        var left = 0;
        var right = elevationMap.length - 1;
        while (left < right) {
            if (elevationMap[left] < elevationMap[right]) {
                // Water can be trapped on the left side
                if (elevationMap[left] >= leftMax) {
                    leftMax = elevationMap[left];
                }
                else {
                    totalWater += leftMax - elevationMap[left];
                }
                left++;
            }
            else {
                // Water can be trapped on the right side
                if (elevationMap[right] >= rightMax) {
                    rightMax = elevationMap[right];
                }
                else {
                    totalWater += rightMax - elevationMap[right];
                }
                right--;
            }
        }
        return totalWater;
    }
    console.log(getTrappedWaterUnit([2, 1, 2]));
    console.log(getTrappedWaterUnit([3, 0, 1, 3, 0, 5]));
    console.log(getTrappedWaterUnit([5, 3, 7, 2, 6, 4, 5, 9, 1, 2])); // Output: 14
    console.log(getTrappedWaterUnit([1, 2, 3, 4, 5])); // Output: 0 (No trapped water)
    console.log(getTrappedWaterUnit([5, 4, 3, 2, 1])); // Output: 0 (No trapped water)
    console.log(getTrappedWaterUnit([5, 2, 1, 2, 1, 5])); // Output: 14
    console.log(getTrappedWaterUnit([5, 2, 6, 1, 5])); // Output: 7
})();
