function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업 실행하는 함수
        // executor
        setTimeout(() => {
            if(typeof num === "number") {
                resolve(num + 10);
            }
            else {
                reject("num은 숫자가 아닙니다." + num);
            }
        }, 2000);
    });

    return promise;
}


const p = add10(10);
p.then((result) => {
    console.log(result)
    
    const p2 = add10(result);
    return p2;
}).then((result) => {
    console.log(result);
});


// const p = add10(10);
// p.then((result) => {
//     console.log(result)
    
//     const p2 = add10(result);
//     p2.then((result) => {
//         console.log(result);
//     })
// });

// then 
// -> 그 후의
// promise.then((value) => {
//     console.log(value);
// })
// .catch((error) => {
//     console.log(error);
// });
// promise.catch((error) => {
//     console.log(error);
// });
