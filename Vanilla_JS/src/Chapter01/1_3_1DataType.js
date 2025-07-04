/*
자료형 
원시 타입과 비 원시 타입으로 구분됨
원시 : number, null, Bigint, undeifined, string, symbol, boolean
비 원시 : Object
*/

// typeof -> 특정 변수의 데이터 타입을 반환하는 연산자
let num = 123;
console.log(typeof num);

// 1. number : 숫자 (정수 + 실수)
// 또한 무한대 (Infinity), 숫자가 아니다 (NaN)도 number 임
let num1 = 123;
let num2 = 10.0000123;
let num3 = Infinity; // -> 0으로 나누게 되면 Infinity 가 반환됨
let num4 = NaN; // -> 부정확한 숫자 연산시 반환됨

console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num3);
console.log(typeof num4);

// 2. BigInt : 숫자 (2^53 -1 보다 크거나 -2^53 - 1 작은 수)를 나타냄
let bigNum1 = 999999999999999999999999999999999999n;
let bigNum2 = BigInt("999999999999999999999999999999999999");

console.log(typeof bigNum1);
console.log(typeof bigNum2);

// 3. String (문자열)
// 작은 따옴표, 큰 따옴표, 백틱으로 표현함
let name = "astraea";
console.log(typeof name);

// 백틱을 사용하면 ${변수명}을 사용해 변수에 접근 가능함
// 이를 템플릿 리터럴이라고 함
let intro = `Hello My name is ${name}`;
console.log(intro);

// 4. Boolean : 참 혹은 거짓을 나타냄
// true, false 으로만 값을 갖음
let isClicked = false;

if (isClicked) {
    console.log("클릭됨");
} else {
    console.log("클릭되지 않음");
}

// 5. Null : 존재 하지 않거나 없는 값을 나타냄
// 자바스크립트에서는 Null 또한 값이 존재하지 않다는 상태를 나타내는 "값"으로 사용됨
let nullVariable = null;

// null 은 typeof 연산자로 데이터 타입을 확인할 경우 object가 반환 이는 자바스크립트의 오랜 오류
console.log(typeof nullVariable);
// null 임을 확인 하는 방법은
console.log(nullVariable === null);

// 6. Undefined : 변수에 값이 할당되지 않은 값
let undeifinedVariable = undefined;
console.log(typeof undeifinedVariable);

// 자바스크립트는 동적 타입 언어이므로 변수 선언시 데이터 타입을 명시 하지 않아도 됨
// 동적 타입 언어 : 프로그램이 실행중에 데이터 타입을 정하는 언어

// 1. 묵시적 형 변환
