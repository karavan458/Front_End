// 1. 상수 객체
const animal = {
    type : "고양이",
    name : "나비",
    color : "black",
};

// 상수 객체이므로 당연히 새로운 객체할당은 불가
//animal = { a : 1};  

// 하지만 프로퍼티는 추가 삭제 변경이 가능하다.
animal.age = 2;
animal.name = "까망이";
delete animal.color;

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
    name : "이정환",

    //메서드
    sayHi: function() {
        console.log("안녕");
    },
};

person.sayHi();
person["sayHi"]();