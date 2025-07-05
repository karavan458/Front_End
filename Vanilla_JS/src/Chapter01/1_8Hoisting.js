// 호이스팅 : 식별자의 선언문이 스코프의 최상단으로 끌어올려진 듯한 현상
// 함수 호이스팅
connetStrings("Hello", "World");

function connetStrings(str1, str2) {
    console.log(str1 + str2);
}

// 변수 호이스팅
// console.log(num1);
// let num1 = 123;

/*
let으로 선언된 변수의 경우에는 자바스크립트는 이런식으로 해석한다.
하지만 let num1; 변수는 선언시 Temporal Dead Zone(TDZ)에 보관되기 때문에 호출이 불가능하다
(초기화 될때 까지 TDZ에 보관됨)
let num1;
console.log(num1);
num1 = 123;
*/

console.log(num2);
var num2 = 456;

/*
var로 선언된 변수의 경우에는 자바스크립트는 이런식으로 해석한다.
var num2;
console.log(num2);
num2 = 456;
*/

// 이러한 일이 발생하는 이유는 간단히 var로 선언된 변수는 메모리 공간이 바로 할당되지만
// let 키워드로 선언된 변수의 경우에는 초기화 되기 전까지는 메모리 공간에 할당되지 않고 TDZ에 보관되기 때문이다.
