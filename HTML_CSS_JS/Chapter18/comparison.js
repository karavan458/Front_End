const a = 1;
const b = 1;
const c = '1';
const d = 2;

console.log(a == b, a != b);
console.log(a == c, a != c);
console.log(a == d, a != d);

console.log(a === c, a !== c);

console.log(a > b, a >= b, a <= b);
console.log(a > d, a <  d, a <= d);

const str1 = "ABC";
const str2 = "DEF";

console.log(str1 === "ABC");

//문자열의 경우 사전 순서상 뒤로 오는 쪽이 더 크다고 인식
console.log(str1 > str2, str1 < str2);