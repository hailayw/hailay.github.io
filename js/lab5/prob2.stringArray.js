// 2. Create a function using function expression named getNewArray with one parameter of String
// Array, return a new array which contains all strings, length is greater than and equal to 5, and
// contains letter ‘a’

//1. using function expression
let result = function getNewArray(...strArr) {
    return strArr.filter(s => s.length >= 5 && s.includes("e"));
};

let strArr = ["Hailay", "Berhanu", "Roseye"];
let r = result(...strArr);
console.log(r);

//output: ['Hailay', 'Berhanu']

//2. using function declaration
// function getNewArray2(...strArr) {//     let newStr = strArr.filter(s => s.length > 5 && s.indexOf("a"));
//     console.log(newStr);
//     return newStr;
// }

// let strArr2 = ["Hailay", "Berhanu", "Rose"];
// let result2 = getNewArray2(...strArr);