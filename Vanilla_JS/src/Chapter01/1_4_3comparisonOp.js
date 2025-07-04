// 비교 연산자
// 두개의 값을 비교하는 연산자

// 일치 === , ==
let num1 = 10;
let num2 = "10";

console.log(num1 === num2); // "값" 과 "데이터 타입" 둘다 비교함
console.log(num1 == num2); // "값"만 비교함

// 불일치 !==, !=
console.log(num1 !== num2);
console.log(num1 != num2);

// 대소비교 < <= > >=
let a = 10;
let b = 20;
let c = 10;

console.log(a < b);
console.log(a > b);
console.log(b >= c);
console.log(a > c);

// 연결연산자 (문자열 연결)
let price = 10000;
console.log("가격: " + price + "원");
