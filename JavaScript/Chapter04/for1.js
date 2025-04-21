//변수 이므로 let이 사용됨
for(let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("-----------------------");

for(let i = 10; i > 0; i-= 2) {
    console.log(i);
}

console.log("-----------------------");

for(let i = 1; i <= 9; i++) {
    for(let j = 1; j <= 9; j++) {
        console.log(i + "X" + j + " = " + (i * j));
    }
}

console.log("------------------------");

for(let i = 0 ; i < 100; i++) {
    if(i % 3 === 0) continue;   // 한 루프 건너띔
    if(i > 10) break;           // 루프 종료
    console.log(i);
}