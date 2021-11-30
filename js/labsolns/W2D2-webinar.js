function a(m, n) {
    console.log(x);
}

function b() {
    const x = 10;
    a(2, 3);
}

const x = 20;

b(55);
/*

3) function b: Creation phase LE: {outer: global, arguments: {0:55, length:1}} - if no arguments here, it's fine. Same for the remaining questions
4) function b: Execution phase LE: {x:10, outer: global, arguments: {0:55, length:1}}
5) function a: Creation phase: LE: {m: 2, n: 3, outer: global, arguments: {0:2, 1:3, length:2}}
6) function a: Execution phase: LE: {m: 2, n: 3, outer: global, arguments: {0:2, 1:3, length:2}}

*/