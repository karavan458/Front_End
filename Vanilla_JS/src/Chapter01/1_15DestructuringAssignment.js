// 구조분해할당
// 배열이나 객체의 요소 및 프로퍼티들을 분해해, 그 값들을 각각의 변수에 할당하는 자바스크립트의 표현식

let colors = ["green", "blue", "purple"];
//let [c1, c2, c3] = colors;

// 베열 선언 할당
// (만약 선언된 변수가 배열의 크기보다 작다면 순서대로 할당됨 반대로 크다면 undefined가 할당됨)
let c1, c2, c3;
[c1, c2, c3] = ["green", "blue", "purple"];

console.log(c1);
console.log(c2);
console.log(c3);

// 배열의 구조분해할당을 사용하게 되면 swap하는 것을 간단히 가능
let a = 10;
let b = 20;
console.log("before \na: " + a, "b: " + b);

[a, b] = [b, a];
console.log("after \na: " + a, "b: " + b);

// 객체의 구조분해 할당
let colorObj = {
    co1: "green",
    co2: "blue",
    co3: "purple",
};

let { co1: color1, co2: color2, co3: color3 } = colorObj;

console.log(color1);
console.log(color2);
console.log(color3);
