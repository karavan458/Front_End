let x = 0;

while (x < 10) {
    console.log(x++);
}

let y = 0;

while(y < 100) {
    const toPrint = y++;

    //contiune, break 역시 동작
    if(toPrint % 3 === 0) continue;
    if(toPrint > 10) break;

    console.log(toPrint);
}