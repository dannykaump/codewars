// CODEWARS SOLUTIONS

//find the vowels
function vowelIndices(word){
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    let arr = []
    for (i = 0; i < word.length; i++) {
      for (j = 0; j < vowels.length; j++) {
        if (word[i].toLowerCase() === vowels[j] ) {
          arr.push(i + 1)
        }
      }
    }
    return arr
  }

//check same case
function sameCase(a, b){
if (!/^[a-zA-Z]+$/.test(a) || !/^[a-zA-Z]+$/.test(b)) {return -1}
if (a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()) {
    return 1
} else {
    return 0
}
}

//square root or square
const squareOrSquareRoot = (array) =>
    array.map((x) =>
    Number.isInteger(Math.sqrt(x)) ? Math.sqrt(x) : x * x
);  

// multiply array values & filter non numeric
const multiplyAndFilter = (array, multiplier) => 
  array.filter(x => typeof x === 'number' ).map(x => x * multiplier);

// get evens from array
const getEvenNumbers =(arr) => arr.filter(x => x % 2 === 0);