// return array with nth element removed

// function removeNthElement(arr, n) {
//     return arr.slice(0, n).concat(arr.slice(n + 1))
//   } 

const removeNthElement = (arr, n) => [...arr.slice(0, n), ...arr.slice(n + 1)]