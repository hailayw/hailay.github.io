// Use Array Methods: filter, map, reduce, etc to implement functions below:
// 1. Create a function using function declaration named sum with one parameter of Array type, the
// returned result is the sum of all elements which are greater than 20.
function sum(...n) {
    let z = n.filter(i => i > 20).reduce((x, y) => x + y);
    console.log(z);
    return z;
}
let arr = [1, 2, 23, 34, 45, 56]
let result = sum(...arr);