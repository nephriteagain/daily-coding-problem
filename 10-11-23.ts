/**
 * This problem was recently asked by Google.

Given a list of numbers and a number k, 
return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and 
k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
 */

function hasSum(numbers:number[],k:number) : boolean {

    const trackedValues = new Set<number>()
    for (let i = 0; i < numbers.length; i++) {
        const requiredNum = k - numbers[i]
        if (trackedValues.has(requiredNum)) {
            return true;
        }
        trackedValues.add(numbers[i])        
    }

    return false;
}

// Example 1: hasSum should return true, as 9 = 4 + 5
console.log(hasSum([4, 5, 2, 7], 9)); // true

// Example 2: hasSum should return false, as there is no pair that sums up to 10
console.log(hasSum([1, 3, 6, 8], 10)); // false

// Example 3: hasSum should return true, as 6 = 3 + 3
console.log(hasSum([1, 3, 5, 3], 6)); // true

// Example 4: hasSum should return false, as there is no pair that sums up to 0
console.log(hasSum([-2, 4, 6, -8], 0)); // false
