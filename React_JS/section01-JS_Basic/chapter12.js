// 1. 함수 표현식

function funcA() {
    console.log("funcA");
}

let varA = funcA;
console.log(varA);
varA();

// 이렇게 선언된 함수는 호이스팅 되지 않는다. 
// -> 함수 선언으로 취급되는 것이 아니라 값으로 취급된다.
let varB = function funcB() {
    console.log("funcB");
}

console.log(varB);
varB();

// 함수 표현식을 사용하면 함수의 이름을 생략 가능하다. 
// 이렇게 생략된 함수를 익명 함수라고 한다.
let varC = function () {
    console.log("funcC");
}

console.log(varC);
varC();

// 2. 화살표 함수 
let varD = () => {
    return 1;
}

console.log(varD());

let varE = (value) => {
    return value + 1;
}

console.log(varE(10));