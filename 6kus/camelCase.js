
// 6 kyu
// Break camelCase
// JavaScript:
// complete the function


function solution(string) {
  let arr = string.split('')
  return arr.map((x,i)=> x === x.toUpperCase() && arr[i-1] ? " " + x : x).join('')
}