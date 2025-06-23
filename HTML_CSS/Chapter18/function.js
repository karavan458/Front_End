function describeHtmlCss() {
    console.log("HTML로 갖다놓고");
    console.log("CSS로 꾸미고")
    console.log("JavaScript로 시킨다.");
}

describeHtmlCss();

// to : 매개변수
function countTo(to) {
    for(let i = 0; i <= to; i++) {
        console.log(5);
    }
}

// 5 : 인자
countTo(5);

function add(x, y) {
    return x + y;
}

console.log(add(2, 3));
console.log(
    add(5, 4), add(4, 9)
);

const subt = function (x, y) {
    return x - y;
}

console.log(subt(7, 2));

// 한 줄 안에 값만 반환 시
const mult = (x, y) => x * y;

console.log(mult(2, 7));

// 두 줄 이상의 작업이 있을 시
const mult1 = (x, y) => {
    console.log(`${x}와 ${y}를 곱합니다.`);
    console.log(`결과는  ${x * y} 입니다.`);
    return x * y;
}

console.log(mult(2, 8));