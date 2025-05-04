//(조건) ? (참일때 값) : (거짓일때 값);

let bool1 = true;
let reuslt = bool1 ? "참" : "거짓";

console.log(reuslt);

bool1 = false;
reuslt = bool1 ? "참" : "거짓";

console.log(reuslt);

let num5 = 103247;

console.log(
    'num5는 3의 배수' + (num5 % 3 === 0 ? "입니다." : "가 아닙니다.")
);