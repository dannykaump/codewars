// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// function accum(s) {
// 	let arr = s.split('')
//   arr[0] = arr[0].toUpperCase()  
//   for (let i = 0; i < s.length; i++) {
//     if (i > 0) {
//       arr[i] = '-' + arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i)
//     }
//   }
//   return arr.join('')
// }

const accum = s =>
    s.split('').map((x, i) =>
        x.toUpperCase() + x.toLowerCase().repeat(i)).join('-');