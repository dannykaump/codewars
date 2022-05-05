// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]

// function countPositivesSumNegatives(input) {
//     let newArr = []
//     let count = 0
//     let sum = 0
//     if (Array.isArray(input) && Number.isInteger(input[0])) {
//         input.forEach(x => x > 0 ? count++ : sum += x)
//         newArr.push(count, sum)
//     }
//     return newArr
// }

const countPositivesSumNegatives = input =>
    input && input.length ?
        [input.filter(x => x > 0).length, input.filter(x => x <= 0).reduce((a, b) => a + b, 0)]
        : [];