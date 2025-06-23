// 변수이므로 let 이 사용됨
for(let i = 0; i < 5; i++) {
    console.log(i);
}

for(let i = 10; i > 0; i-= 2) {
    console.log(i);
}

for(let i = 1; i < 10; i++) {
    for(let j = 1; j < 10; j++) {
        console.log(i + " X " + j + " = " + (i * j));
    }
}

for(let i = 0; i < 1000; i++) {
    if(i % 3 === 0) continue;   // 한 루프를 건너 띔
    if(i > 10) break;           // 루프 종료
    console.log(i);
}