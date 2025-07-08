// spread -> 특정 배열의 요소나 객체의 프로퍼티를 펼치는 역할
// spread문법 객체에서 사용하기
const toy = {
    type: "bear",
    price: 15000,
};

const blueToy = {
    ...toy,
    color: "blue",
};

const yellowToy = {
    ...toy,
    color: "yellow",
};

console.log(blueToy);
console.log(yellowToy);

// spread 문법 배열에서 사용하기
const color1 = ["red", "orange", "yellow"];
const color2 = ["blue", "navy", "purple"];

const rainbow = [...color1, "green", ...color2];
console.log(rainbow);

// rest -> 나머지 매개변수
// rest 문법 객체에서 사용하기
const blueToyObj = {
    type: "bear",
    price: 15000,
    color: "blue",
};

const { type, ...rest } = blueToyObj;

console.log(type);
console.log(rest);

// rest 문법 배열에서 사용하기
const color = ["red", "orange", "yellow", "green"];
const [c1, c2, ...restColor] = color;

console.log(c1);
console.log(restColor);

// rest 문법 함수에서 사용하기
const print = (a, b, ...rest) => {
    console.log(a, b, rest);
};

print(1, 2, 3, 4, 5, 6);

// spread, rest 차이 이해
const printNumber = (...rest) => {
    // rest 문법 사용
    console.log(...rest);
};

const numbers = [1, 2, 3, 4, 5, 6];
print(...numbers); // spread 문법
