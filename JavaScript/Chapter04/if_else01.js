let open = true;
open = !open;

if(open) {
    console.log("안녕하세요");
    console.log("자리로 안내하겠습니다.");
}
else {
    console.log("영업 시간이 아닙니다.");
}

const x = 10;

if(x % 4) {
    if(x % 2) {
        console.log("홀수입니다.");
    }
    else {
        console.log("짝수입니다.");
    }
}
else {
    console.log("4의 배수 입니다.");
}