// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

const cubeOdd = arr =>
    /^[\d/-]+$/.test(arr.join('')) ? arr.map(x => Math.pow(x, 3))
        .filter(x => x % 2 !== 0)
        .reduce((a, b) => a + b, 0)
        : undefined;
