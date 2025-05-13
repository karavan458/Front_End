// 1. spread 연산자
// -> spread : 흩뿌리다. 펼치다.
// -> 객체나 배열에 저장된 여러 값을 개별로 뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

console.log(arr2);

let obj1 = {
    a: 1,
    b: 2
};

let obj2 = {
    ...obj1,
    c: 3,
    d: 4
};

console.log(obj2);

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest : 나머지, 나머지 매개변수
function funcB(one, ...rest) {
    console.log(one, rest);
}

funcB(...arr1);