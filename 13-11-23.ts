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
function solution(numbers: number[]) : number {
    let minpos = 1;
    const uniques = new Set<number>()
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            continue;
        }
        uniques.add(numbers[i])
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
function solution2(numbers: (number)[]) : number {
    const arr : number[] = [0];

    for (let i = 0; i < arr.length; i++) {
        if (numbers[i] < 0) {
            continue;
        }
        arr[numbers[i]] = numbers[i]
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined) {
            return i
        }
    }
    return arr.length;
}


const s1 = solution([3,4,-1,1])
const s2 = solution([1, 2, 0])
console.log(s1,s2)


const s3 = solution2([3,4,-1,1,2])
const s4 = solution2([1, 2, 0])
console.log(s3,s4)