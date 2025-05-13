// 1. Falsty한 값 
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;    // BigInteger

if(!f1) {
    console.log("falsy");
}

// 2. truthy한 값
// -> 7가지 falsy한 값 이외의 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if(t4) {
    console.log("truthy");
}

// 3. 활용사례
function printName(person) {
    if(!person) {
        console.log("person에 값이 없습니다.");
        return;
    }
    console.log(person);
}

let person;
printName(person);