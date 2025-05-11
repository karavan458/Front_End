// 스코프
// -> 전역 스코프 / 지역 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1;  // 전역 스코프

function funcA() {
    let b = 2;  // 지역 스코프
    console.log(a);

    function funcB() {

    }
}

funcA();
//console.log(b); // 오류 발생
//funcB();  //오류 발생 

if(true) {
    let c = 1;  // 지역 스코프
}

//console.log(c); // 오류 발생

for(let i = 0; i < 10; i++) {
    let d = 1;
}

//console.log(d); // 오류 발생
//console.log(i); // 오류 발생