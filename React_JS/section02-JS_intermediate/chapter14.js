// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 해주는 키워드

async function getData1() {
    return {
        name: "홍길동",
        id: "hong"
    };
}

async function getDate2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name:"임꺽정",
                id: "lim"
            });
        }, 1000);
    });
}

console.log(getData1());
console.log(getDate2());

// await
// async 한수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
    const date = await getDate2();
    console.log(date);
}

printData();
