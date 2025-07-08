// concat -> 2개의 배열을 이어붙여 하나의 배열로 반환
let array1 = ["green", "blue"];
let array2 = ["purple", "yellow"];

console.log(array1.concat(array2));

// join -> 배열의 요소를 문자열로 반환
let colors = ["green", "blue", "black", "white"];
console.log(colors.join());
console.log(colors.join("/"));

// sort -> 배열을 정렬하는 매서드
// 문자열은 사전 순으로 정렬됨
colors.sort();
console.log(colors);

// 역정렬하기 위해서는 ...
const compare = (a, b) => {
    if (a > b) return -1;
    else if (b < a) return 1;
    else return 0;
};

colors.sort(compare);
console.log(colors);

// sort함수는 숫자 또한 정렬방식이 좀 이상하므로 다시 compare를 만들어줘야함
let arr = [4, 3, 6, 5, 2, 1];

// 역정렬시 b - a로 return 하면 됨
const compare1 = (a, b) => {
    return a - b;
};

arr.sort(compare1);
console.log(arr);

// reduce 함수
let sum = arr.reduce((acc, cur, idx) => {
    console.log(acc, cur, idx);
    return acc + cur;
}, 0);

console.log(sum);

// isArray -> 전달된 매개변수가 배열인지 아닌지를 판별
let a = Array.isArray([1, 500, 200]);
let b = Array.isArray({ id: 1, color: "grees" });
let c = Array.isArray("String");
let d = Array.isArray(undefined);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
