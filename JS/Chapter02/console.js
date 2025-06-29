// 문법
// console.log( 로그에 출력할 값 );
// console.log( 값1, 값2, 값3...);

console.log("Hello World...!");
console.log(1);
console.log(true);
console.log({name: "홍길동", age: 20, married: false});
console.log("Hi!", 100, true, [1, 2, 3]);

// console 이란 ? 
// 소프트웨어 외적으로는 영향을 끼치지 않음 - 개발자가 확인하는 용도로 사용
// 콘솔을 열어 확인하지 않는 이상 보이지 않음
console.log(this);

// console의 기능들
console.log("로그 - 기본적인 출력");
console.info("로그 - 기본적으로는 log와 같은. 사용하기에 따라 용도 구분 가능");
console.warn("경고 - 문제가 될 수 있는 부분");
console.error("오류 - 에러 발생 상황");