if(ture) console.log("사실");
if(false) console.log("거짓");

let open = true;

// 한줄 코드
if(open) console.log("안녕하세요");

// 여러줄 코드
if(open) {
    console.log("안녕하세요");
    console.log("자리로 안내하겠습니다.");
}

open = !open;

if(open) {
    console.log("안녕하세요");
    console.log("자리로 안내하겠습니다.");
} else {
    console.log("영업시간이 아닙니다. 죄송합니다.");
}

const x = 10;

if(x % 4 == 0) {
    if(x % 2 == 0) {
        console.log("짝수입니다.");
    } else {
        console.log("홀수입니다.");
    }

    console.log("4의 배수입니다.");
}

const a = 1;
const b = 2;

if(a > b) {
    console.log("a가 b보다 작다.");
} else if(a < b) {
    console.log("b가 a보다 작다.");
} else {
    console.log("a와 b는 같다.");
}

const yootThrow = '도';

if(yootThrow === '도') {
    console.log('한칸 전진');
} else if(yootThrow === '개') {
    console.log("두칸 전진");
} else if(yootThrow === '걸') {
    console.log("세칸 전진");
} else if(yootThrow === '윷') {
    console.log("네칸 전진");
} else {
    console.log("다섯칸 전진");
}