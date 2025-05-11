// 1. 변수
let age = 27;
console.log(age);

age = 30;
console.log(age);

// 2. 상수
const birth ="1997.01.07";

//3. 변수 명명규칙(네이밍 규칙)
//3-1 $, _ 제외한 기호는 사용할 수 없다.
let $name = 10;
let _name = 20;

//3-2 숫자로 시작할 수 없다.
let name1;
let na2me;

//3-3 예약어를 사용할 수 없다.

// 4. 변수 명명 가이드
// 좋지 못한 변수 명명
let a = 1;
let b = 1;
let c = a - b;

//변수 이름을 잘 지은사례 (판매 관련 변수)
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
