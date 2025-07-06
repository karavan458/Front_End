// 배열 : 순서가 있는 데이터를 저장하는 데이터 타입

// 배열 생성1 - 생성자 사용
let arr1 = new Array(1, 2, 3);
let arr2 = new Array(3); // 숫자 하나일 경우에는 배열의 크기를 지정

console.log(arr1);
console.log(arr2);

// 배열 생성2 - 리터럴 사용
let arr3 = [1, 2, 3];
let arr4 = [3]; // 생성자와 달리 숫자 하나일 경우에도 배열의 요소로 값이 할당됨

console.log(arr3);
console.log(arr4);

let arr = [
    { name: "홍길동" },
    1,
    "Array",

    function () {
        console.log("Hello World");
    },

    null,
    undefined,
];

console.log(arr);

// 배열은 index를 통해 요소에 접근함 (배열의 인덱스는 0부터 시작함)
let array = [1, "Hello", null];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

// 배열 요소 추가
// push() unshift()
let fruits = ["apple", "orange", "peach"];

// push() 배열의 가장 마지막에 요소를 추가
fruits.push("grape");
console.log(fruits);

// unshift() 배열의 가장 앞으로 요소를 추가
fruits.unshift("kiwi");
console.log(fruits);

// 배열 요소 수정
let animal = ["cat", "dog", "hamster"];

animal = ["cat", "rabbit", "hamster"];
console.log(animal);

animal[2] = "tiger";
console.log(animal);

// 배열 또한 const 로 선언되면 인덱스를 통해 배열의 요소에 접근하여 수정이 가능하나
// 배열 자체의 재 할당은 불가능함

// 배열 요소 삭제
const colors = ["purple", "blue", "black", "white", "green"];

// pop() -> 배열의 가장 마지막 요소가 삭제
colors.pop();
console.log(colors);

// shift() -> 배열의 가장 앞 요소를 삭제
colors.shift();
console.log(colors);

// splice() -> splice(start, deleteCount) 형식임 삭제를 할 인덱스 번호, 삭제할 개수
colors.splice(1, 1);
console.log(colors);

// 추가적으로 알두면 좋은 것 .length : 배열의 길이를 반환
console.log(colors.length);
