// After calling the function findSum() with any number of non-negative integer arguments, it should return the sum of all those arguments. If no arguments are given, the function should return 0, if negative arguments are given, it should return -1.

// Example
// findSum(1,2,3,4); // returns 10 
// findSum(1,-2);    // returns -1 
// findSum();        // returns 0 

function findSum(...nums) {
    switch (true) {
        case !sum(nums):
            return 0
        case sum(nums) === sum(nums.map(x => Math.abs(x))):
            return sum(nums)
        default:
            return -1
    }
}
