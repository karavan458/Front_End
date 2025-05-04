let a = 0;
let b = 1;
let c = 2;
console.log("시점 1 :", a, b, c);

{
    let a = "A";
    let b = "B";
    console.log("시점 2 :", a, b, c);

    {
        let a = "가";
        console.log("시점 3 :", a, b, c);
    }

    console.log("시점 4 :", a, b, c);
}

console.log("시점 5 :", a, b, c);

// 블럭안에 해당 변수/상수가 없다면 바깥쪽으로 찾아 나감