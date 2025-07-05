// 콜백 함수
// 다른 함수의 매개변수로 넘겨진 함수를 의미함
const calculate = (a, b, callback) => {
    let result = a + b;
    callback(result);
};

const printResult = (result) => {
    console.log("결과: " + result);
};

const doubleResult = (result) => {
    console.log("결과에 2를 곱함: " + result * 2);
};

calculate(5, 3, printResult);
calculate(5, 3, doubleResult);

const testFunc = (callback) => {
    callback();
};

testFunc(() => {
    console.log("콜백함수 테스트1");
});

testFunc(function () {
    console.log("콜백함수 테스트2");
});
