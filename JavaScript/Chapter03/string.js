//작은 따옴표 또는 큰 따옴표로 둘러쌈
const str1 = 'Hello';
const str2 = "월드";    //비 알파벳 문자 및 이모지 등 표현 가능

console.log(typeof '안녕하세요!');
console.log(typeof '1');

let str3 = str1 + 'World!';
console.log(str3);

str3 = str3 + "☺️";
console.log(str3);
