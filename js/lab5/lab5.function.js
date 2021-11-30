// Use Array Methods: filter, map, reduce, etc to implement functions below:
// 1. Create a function using function declaration named sum with one parameter of Array type, the
// returned result is the sum of all elements which are greater than 20.
// 2. Create a function using function expression named getNewArray with one parameter of String
// Array, return a new array which contains all strings, length is greater than and equal to 5, and
// contains letter ‘a’


//1. sum using function declaration
function sum(...n) {
    let z = n.filter(i => i > 20).reduce((x, y) => x + y);
    console.log(z);
    return z;
}
//test data
let arr = [10, 20, 23, 23]
let result = sum(...arr);

//output: 23 + 23 = 46


//2. getNewArray(), using function expression
let result = function getNewArray(...strArr) {
    return strArr.filter(s => s.length > 5 && s.indexOf("a"));
};

//test data
let strArr = ["Hailay", "Berhanu", "Rose"];
let r = result(...strArr);

//output: ['Hailay', 'Berhanu']

//find shortest string
function shortest(s1, s2, s3) {
    let s = s1;
    if (s.length > s2.length)
        s = s2;
    if (s.length > s3.length)
        s = s3;
    return s;
}