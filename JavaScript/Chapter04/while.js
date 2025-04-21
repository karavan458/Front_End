let x = 0;

while(x < 10) {
    console.log(x++);
}

console.log("\n-------------------------\n");

x = 0;

while(x < 100) {
    const toPrint = x++;

    //continue, break 역시 동작
    if(toPrint % 3 === 0) continue;
    if(toPrint > 10) break;

    console.log(toPrint);
}