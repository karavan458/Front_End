// for
for (let idx = 0; idx < 5; idx++) {
    console.log("반복 : " + idx);
}

// break -> 조건식이 거짓이 되지 않았어도 반복문을 종료
for (let idx = 0; idx < 10; idx++) {
    console.log("반복 : " + idx);

    if(idx >= 5) {
        break;
    }
}

// contiune -> 특정 반복을 건너띄고 다음 반복으로 넘어감
for (let idx = 0; idx <= 10; idx++) {
    if(idx % 2 === 0) {
        continue;
    }

    console.log("반복 : " + idx);
}