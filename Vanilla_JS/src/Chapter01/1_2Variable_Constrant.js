/*
자바 스크립트의 변수 명명 규칙
1. 변수명에는  $기호와 _기호를 제외한 다른 기호는 사용할 수 없다.
2. 변수명의 맨 앞에는 숫자를 사용할 수 없다. 
3. 변수명에는 예약어를 사용할 수 없다.
*/
let name = "world";
name = "세상";

console.log(name);
/*
자바 스크립트 변수 명명 관례
1. 긴수명 표기법에는 카멜 표기법을 사용
*/

let userInfo;
let isTrueOrFalse;

/* 
상수 : 변하지 않는 값을 저장하는 저장소
1. const 라는 키워드를 사용해 저장
2. 한번 저장된 (할당된) 값을 재할당 할 수 없음
*/

const GREET = "HELLO";
// GREET = "World"; // 재할당 불가
console.log(GREET);
