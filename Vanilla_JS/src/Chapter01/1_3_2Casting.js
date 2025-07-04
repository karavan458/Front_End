// 1. 묵시적 형 변환
let num1 = "15";
let num2 = 5;

// 자바스크립트 엔진이 String 타입인 num1 을  자동으로 number 로 변환
console.log(num1 / num2);

// 2. 명시적 형 변환
// 프로그래머가 의도적으로 데이터타입을 결정
let num3 = "15";
let num4 = 5;

console.log(parseInt(num1) + num2);
