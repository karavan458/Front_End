// 5가지 배열 변형 메서드

// 1.filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name : "홍길동", hobby: "테니스"},
    {name : "임껄정", hobby: "테니스"},
    {name : "아무개", hobby: "독서"}
];

const tennisPeople = arr1.filter((item) => {
    if(item.hobby === "테니스") {
        return true;
    }
})

const bookPeople = arr1.filter((item) => item.hobby === "독서");

console.log(tennisPeople);
console.log(bookPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고
// 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
    console.log(idx, item);
    return item * 2;
})

console.log(mapResult1);

let names = arr1.map((item) => item.name)

console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();

console.log(arr3);

arr3 = [10, 3, 5];
arr3.sort((a, b) => {
    if(a > b) {
        // b가 a앞으로 옮김
        return 1;
    }
    else if(a < b) {
        // a가 b 앞으로 옮김
        return -1;
    }
    else {
        // a와 b와 값이 같음
        return 0;
    }
});

console.log(arr3);

// 4. toSorted
// 정렬한 배열을 새로운 배열로 반환하는 매서드
let arr4 = ["c", "b", "a"];
const sorted = arr3.toSorted();
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐허 반환하는 메서드
let arr5 = ["i", "am", "person"];
const joined = arr5.join("_");

console.log(joined);