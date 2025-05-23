// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것
let num = 10;
let str = "20";

const result = num + str;
console.log(result);

// 2. 명시적 형 변환
// -> 프로그래머가 내장함수 등을 이용하여 직접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum = Number(str1);
console.log(10 + strToNum);

let str2 = "10개";
let strToNUm2 = Number(str2);
console.log(strToNUm2);

let strToNUm2_1 = parseInt(str2);
console.log(strToNUm2_1);

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다.");