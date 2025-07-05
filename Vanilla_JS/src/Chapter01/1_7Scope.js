// 스코프 : 변수와 함수가 영향을 미치는 범위

// 테스트 함수
function testFunc() {
    let innerNum = 50;
    console.log(innerNum);
    console.log(globalNum);
}

// 전역 스코프 (Golbal scope)
let globalNum = 100;

testFunc();
console.log(globalNum);

// 지역 스코프 (local scope)
//console.log(innerNum); // -> innerNum 변수는 testFunc()에서 선언된 변수이기 때문에 호출이 불가

let global = "나는 전역 변수 입니다.";

function outerFunction() {
    let outer = "나는 outerFunction함수에서 선언된 변수입니다.";

    function innerFunction() {
        let inner = "나는 innerFunction함수에서 선언된 변수입니다.";
        console.log(global);
        console.log(outer);
        console.log(inner);
    }

    innerFunction();
    console.log(global);
    console.log(outer);
    //console.log(inner);   // inner 변수는 호출이 불가함
}

outerFunction();

// 함수 스코프, 블록 스코프
function print() {
    // for 문의 i 변수를 let 으로 선언해보고, var로도 선언해보자
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }

    console.log(i); // 블록스코프(let i 사용시), 함수스코프(var i 사용시)
}

print();

// 정리 -> let, var
// let -> 블록스코프를 갖는 변수(java의 변수와 비슷함, const 또한 let의 스코프와 동일)
// var -> 함수스코프를 갖는 변수(오래된 변수 선언, 현재에서는 사용을 하지 않는 것을 권장)

var num = 10;
var num = 100;

console.log(num);
