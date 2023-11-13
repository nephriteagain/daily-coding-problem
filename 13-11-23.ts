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

function solution(numbers: number[]) : number {
    let minpos = 1;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === minpos) {
            minpos++;
        }
    }

    return minpos;
}

const s1 = solution([3,4,-1,1])
const s2 = solution([1, 2, 0])
console.log(s1,s2)