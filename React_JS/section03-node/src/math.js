// 간단한 계산기능을 모아놓은 math 모듈

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

export default function multiply(a, b) {
    return a * b;
}

// module.exports = {
//     add : add,
//     sub : sub,
// };

export {add, sub};