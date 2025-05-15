// 1. Date 객체를 생성하는 방법
let date1 = new Date();
console.log(date1);

let date2 = new Date("1995-10-20");
console.log(date2);

// 2. 타임 스탬프
// 특정 시간으로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1. getMonth();
let date = date1.getDate();

let hour = date1.getHours();
let min = date1.getMinutes();
let sec = date1.getSeconds();

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(3);

console.log(date1);

// 5. 시간을 여러 포멧으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());