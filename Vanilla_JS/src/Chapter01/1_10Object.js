// 객체 : 비원시 타입의 자료형
// 객체 생성 : 생성자 함수, 리터럴

// 1. 생성자 함수
let obj = new Object();
console.log(obj);

// 2. 리터럴
let obj1 = {};
console.log(obj1);

// key : value
let book = {
    title: "자바스크립트 첫걸음",
    author: "김효빈",
    category: "자바스크립트",
    year: undefined,

    color: function () {
        console.log("orange");
    },
};

// 객체 프로퍼티 사용
let car = {
    name: "붕붕",
    model: "morning",
    color: "black",
};

// 점 표기법
console.log(car.name);
console.log(car.model);
console.log(car.color);

// 괄호표기법
console.log(car["name"]);
console.log(car["model"]);
console.log(car["color"]);

const getValue = (key) => {
    console.log(car[key]);
};

getValue("color");

// 객체 프로퍼티 추가, 수정 (점 표기법, 괄호 표기법)
// const 키워드로 객체가 선언되더라도 프로퍼티 수정 가능
// const 키워드로 선언된 객체는 프로퍼티를 수정하는 것은 가능하나 객체를 재할당하는 것은 불가능
let cat = {
    age: 2,
};

cat.name = "야옹이";
cat["color"] = "white";
console.log(cat);

cat.name = "점박이";
cat["color"] = "blue";
console.log(cat);

// 객체 프로퍼티 삭제
delete cat.color;
delete cat["age"];
console.log(cat);

// 메서드 호출 방법
// 객체 프로퍼티내의 함수는 객체의 필드에 접근이 가능하다. (this 키워드 사용)
// 메서드를 선언 할때에는 함수 선언식을 사용하여 정의하는 것이 좋음
// 함수 표현식 (화살표 함수) 를 사용하게 되면 this 키워드가 메서드가 자기 자신에 접근하지 않고 최상위 객체인 window에 접근되기 때문임
const person = {
    name: "홍길동",
    age: 23,

    print: function () {
        console.log("Hello World");
    },

    printName: function () {
        console.log(`제 이름은 ${this.name} 입니다.`);
    },
};

person.print();
person["print"]();

person.printName();
