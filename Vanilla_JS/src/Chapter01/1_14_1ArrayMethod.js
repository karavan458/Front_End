let arr = [1, 2, 3, 4, 5];

// for each
arr.forEach((elm, idx, array) => {
    console.log(elm); // elm : 배열의 요소
    console.log(`${idx}번째 요소는 ${elm}입니다.`); //idx : 배열의 인덱스 번호
    console.log(array); // array : arr 배열 자체가 반환
});

// map -> 다른 배열의 요소로 초기화 해주는 콜백 함수
let arr2 = arr.map((elm) => {
    return elm * 10;
});
console.log(arr2);

let colors = ["green", "blue", "purple"];

// at -> 배열의 특정 요소를 탐색
// at 의 매개변수로 각각의 인덱스를 넣으면 됨 -1일 경우에는 가장 마지막 요소가 반환됨
// 배열에 가장 마지막 요소를 쉽게 접근할수 있음 그럴때 사용됨
console.log(colors.at(-1));

// include -> 배열이 이 요소를 갖고 있는지 판별하여 boolean 형태로 반환
// 두번째 매개변수에서 정수를 입력하면 탐색의 시작점을 지정할 수 있음
console.log(colors.includes("blue"));
console.log(colors.includes("yellow", 1));

// index of -> 특정 값을 지닌 요소가 몇번 인덱스에 있는지를 반환
// 두번째 매개변수에서 정수를 입력하면 탐색의 시작점을 지정할 수 있음
// 다만 요소의 데이터가 객체이거나 배열일 경우에는 탐색이 불가능함
console.log(colors.indexOf("purple")); // 존재하는 요소라면 인덱스 값 반환
console.log(colors.indexOf("yellow")); // 존재하지 않는 요소라면 -1을 반환

// 객체배열일 경우 findIndex라는 함수를 사용해야함
let colorObj = [
    { id: 1, color: "green" },
    { id: 2, color: "blue" },
    { id: 3, color: "purple" },
    { id: 4, color: "red" },
];

let idx = colorObj.findIndex((elm) => elm.color === "purple");

console.log(idx);

colorObj.findIndex((elm, idx, array) =>
    console.log(`${idx}번째 id: ${elm.id}이고 color: ${elm.color}입니다.`)
);

colorObj.findIndex((elm, idx, array) => console.log(array));

// find : 찾아낸 요소를 반환하는 함수
let index = colorObj.find((elm) => elm.color === "purple");
console.log(index);

// filter -> 기존배열에서 조건을 만족하는 요소만으로 새로운 배열을 반환하는 함수
let filterArray = colorObj.filter((elm, idx, array) => elm.id > 1);
console.log(filterArray);

console.log(colorObj);

// slice -> 특정 배열의 인덱스번호를 통해 원하는 만큼 새로운 배열을 반환하는 함수
let sliceArray = colorObj.slice(1, 3); // 잘라낼 인덱스 번호, 끝낼 번호
console.log(sliceArray);
