// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s) {
    let str1 = s.split('').map((ch, i) => i % 2 === 0 ? ch.toUpperCase() : ch).join('')
    let str2 = s.split('').map((ch, i) => i % 2 !== 0 ? ch.toUpperCase() : ch).join('')
    return [str1, str2];
};