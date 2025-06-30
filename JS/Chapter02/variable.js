// 1. 데이터를 담는 곳
console.log("Hello",  "철수");

// 값들을 변수에 담아 사용하기
const SALUTATION = "Hello";
let person = "철수";
console.log(SALUTATION, person);

person = "영희";
console.log(SALUTATION, person);

// 2. 변수
// 담긴 값이 바뀔수 있는 공간
// let 을 사용 -> var는 역사의 뒤안길로....
let x;
console.log(x);

x = 1;
console.log(x);

// 3. 다른 변수가 같은 값을 가질 때 
let num1 = 1;
let num2 = num1;
console.log(num1, num2);

// 4. num1의 값을 문자열로 변경
console.log("변경 전 : ", num1, num2);

num1 = "Hello";
console.log("변경 후 : ", num1, num2);

// 5. 이미 만들어진 변수를 재선언 불가
let x5 = 1;
console.log("첫 선언 : ", x5);

// let x5 = 2;
// console.log("재 선언 : ", x5);

// 6. 선언되기 전 변수를 사용할 수는 없음
console.log(xyz);
let xyz = 1;