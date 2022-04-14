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

// twice as old
const twiceAsOld = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - sonYearsOld * 2);

// remove every other element
function removeEveryOther(arr){
    let newArr = []
    arr.forEach(function(x, i) { if (i % 2 === 0){
      newArr.push(x)
    }})
    return newArr
  }

// freudian translator
const toFreud = (string) => 
  string ? string.split(' ').map(x => 'sex').join(' ') : string;

// count instances of letter in str
function strCount(str, letter){
    let count = 0
    str.split('').forEach(function(x) {
      if (letter === x) {
        count++
      }
    })
    return count
  }

// basic calc
function calculate(num1, operation, num2) {
    switch (operation) {
      case '+' :
        return num1 + num2;
      case '-' :
        return num1 - num2;
      case '/' :
        return num2 === 0 ? null : num1 / num2;
      case '*' :
        return num1 * num2;
      default :
        return null
   }
  }

//  create phone number 
function createPhoneNumber(nums){
    return `(${nums.slice(0, 3).join('')}) ${nums.slice(3, 6).join('')}-${nums.slice(6, 10).join('')}`
  }