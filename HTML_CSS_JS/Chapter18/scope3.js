const xx = 0;
let yy = "Hello";

console.log(xx, yy);

{
    const xx = 1;   // 블록 안에서는 바깥의 const 재선언 가능
    let yy = "안녕하세요";

    console.log(xx, yy);
    //const, let을 빼면 재선언이 아니라 바깥의 값을(변수면) 바꿈
}

console.log(xx, yy);