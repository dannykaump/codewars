// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

function findUniq(arr) {
    let num = arr[0]
    let same = []
    let diff = []
    arr.forEach(function (x) {
        if (x === num) {
            same.push(x)
        } else {
            diff.push(x)
        }
    })
    return same.length > diff.length ? diff[0] : same[0]
}
