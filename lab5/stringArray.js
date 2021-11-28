// 2. Create a function using function expression named getNewArray with one parameter of String
// Array, return a new array which contains all strings, length is greater than and equal to 5, and
// contains letter ‘a’
function getNewArray(...strArr) {
    let newStr = strArr.filter(s => s.length > 5 && s.indexOf("a"));
    console.log(newStr);
    return newStr;
}

let strArr = ["Hailay", "Berhanu", "Rose"];
let result = getNewArray(...strArr);