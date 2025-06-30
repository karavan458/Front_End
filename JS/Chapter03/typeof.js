// typeof 연산자 : 뒤에 오는 값의 자료형을 retur
const a = true, b = 123.45, c = "안녕하세요";

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);

let d;
console.log(d, typeof d);

d = null;
console.log(d, typeof d);   // object 반환

const e = Symobol("hello");
console.log(typeof e);