// 함수
// 수학에서의 함수 어떠한 값 x의 값이 들어왔을 때 결과값 Y(f(x)) 를 반환
// 자바스크립트에서는 동일한 기능을 하는 코드들을 모아 하나의 명령어로 만드는 문법을 말함

//before
let num1 = 10;
let num2 = 15;
let sum = num1 + num2;

console.log(sum);

let num3 = 1;
let num4 = 5;
let sum2 = num3 + num4;

console.log(sum2);

// after
function add1(x, y) {
    console.log(x + y);
}

add1(num1, num2);
add1(num3, num4);

function add2(x, y) {
    return x + y;
}

let result1 = add2(num1, num2);
let result2 = add2(num3, num4);
console.log(result1, result2);

//Early return pattern
function compare(num) {
    if (num === 0) {
        console.log("num의 값이 0입니다.");
    } else if (num < 0) {
        console.log("num의 값이 0보다 작습니다.");
    } else {
        if (num >= 10) {
            console.log("num의 값이 10보다 크거나 같습니다.");
        } else {
            console.log("num의 값이 10보다 작고 0보다 큽니다.");
        }
    }
}

// 조건에 만족하기만 한다면 바로 return 하는 패턴임
function compare1(num) {
    if (num === 0) {
        return "num의 값이 0입니다.";
    }
    if (num < 0) {
        return "num의 값이 0보다 작습니다.";
    }
    if (num >= 10) {
        return "num의 값이 10보다 크거나 같습니다.";
    }

    return "num의 값이 10보다 작고 0보다 큽니다.";
}

compare(10);
console.log(compare1(10));
