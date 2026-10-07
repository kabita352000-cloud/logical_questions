
// This is the Sliding Window Maximum problem.
let nums = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;

// What does k = 3 mean?

// It means we take 3 elements at a time from the array and find the maximum number in each group.

// Array:

// [1, 3, -1, -3, 5, 3, 6, 7]
// Step by step

// First 3 elements:

// [1, 3, -1]

// Maximum = 3

// Move the window one position:

// [3, -1, -3]

// Maximum = 3

// Again:

// [-1, -3, 5]

// Maximum = 5

// Again:

// [-3, 5, 3]

// Maximum = 5

// Again:

// [5, 3, 6]

// Maximum = 6

// Again:

// [3, 6, 7]

// Maximum = 7

// So the answer is:

// [3, 3, 5, 5, 6, 7]
// Visual
// [1, 3, -1] -3  5  3  6  7  → 3

//  1 [3, -1, -3] 5  3  6  7  → 3

//  1  3 [-1, -3, 5] 3  6  7  → 5

//  1  3  -1 [-3, 5, 3] 6  7  → 5

//  1  3  -1  -3 [5, 3, 6] 7  → 6

//  1  3  -1  -3  5 [3, 6, 7] → 7



// let nums = [1, 3, -1, -3, 5, 3, 6, 7];
// let k = 3;

let result = [];

for (let i = 0; i <= nums.length - k; i++) {
    let max = nums[i];

    for (let j = i; j < i + k; j++) {
        if (nums[j] > max) {
            max = nums[j];
        }
    }

    result.push(max);
}

console.log(result);