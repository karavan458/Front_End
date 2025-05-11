// 함수 선언
function greeting() {
    console.log("Hello World...!");
}

// 함수 호출
console.log("함수 호출 전");
greeting();
console.log("함수 호출 후");

function getArea1() {
    let width = 10;
    let height = 20;
    let area = width * height;

    console.log(area);
}

getArea1();

// 매개변수와 인자를 활용한 함수
function getArea2(width, height) {
    let area = width * height;
    console.log(area);
}

getArea2(10, 20);

// 반환값을 활용한 함수
function getArea3(width, height) {
    return width * height;
}

let area3 = getArea3(10, 20);
console.log(area3);

// 중첩함수
function greet() {
    function greetWithName(name) {
        console.log(`hello ! ${name}`);
    }

    let name = "이정환";
    greetWithName(name);
}

greet();

// 함수 호이스팅
// -> 끌어올리다 라는 뜻

func();

function func() {
    console.log("함수 호이스팅");
}