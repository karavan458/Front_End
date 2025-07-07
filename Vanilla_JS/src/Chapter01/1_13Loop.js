// 특정 작업을 반복적으로 수행 할때 사용

// for 문 초기화문, 조건문, 증감식
for (let i = 1; i < 6; i++) {
    console.log(i);
}

// while문
let i = 1;
while (i < 6) {
    console.log(i);
    i++;
}

// 반복문을 통해 배열접근
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 반복문을 통해 객체 접근
let person = {
    name: "홍길동",
    age: 25,
    height: 180,
};

// 객체의 key 값으로 배열로 변환
console.log(Object.keys(person));
let arr1 = Object.keys(person);

for (let i = 0; i < arr1.length; i++) {
    let nowKey = arr1[i];
    console.log(`key : ${nowKey}, value : ${person[nowKey]}`);
}

// 객체의 프로퍼티를 배열로 반환
console.log(Object.values(person));
let arr2 = Object.values(person);

for (let i = 0; i < arr2.length; i++) {
    console.log(`value : ${arr2[i]}`);
}

// 객체의 key : value를 배열로 반환
console.log(Object.entries(person));
let arr3 = Object.entries(person);

for (let i = 0; i < arr3.length; i++) {
    console.log(`key : ${arr3[i][0]}, values : ${arr3[i][1]}`);
}

//for of -> 배열에 모든 요소를 접근할때 사용
let arr4 = [1, 2, 3, 4, 5, 6];

for (let i of arr4) {
    console.log(i);
}

// for in -> 객체의 모든 프로퍼티를 순회할때 사용
let animal = {
    type: "고양이",
    age: 3,
};

for (let key in animal) {
    console.log(key);
    console.log(animal[key]);
}
