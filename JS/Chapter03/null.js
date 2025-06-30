// null : 의도적인 빈 값을 의미 
// null 또한 값임 : 비어있다 란 의미의 값
// object(객체) 등이 들어있거나 반환되어야 하지만 없을때 주로 사용
// - 객체 생성이 실패한 경우 등에 대신 반환

let x;
console.log("값을 넣기 전", typeof x);

x = null;
console.log("null 값을 넣은 후", typeof x);