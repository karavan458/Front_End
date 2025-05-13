function returnFalse() {
    console.log("False function");
    return false;
}

function returnTrue() {
    console.log("True function");
    return true;
}

console.log(returnFalse() && returnTrue());
console.log(returnTrue() && returnFalse());

console.log(returnFalse() || returnTrue());
console.log(returnTrue() || returnFalse());

function returnFalsy() {
    console.log("falsy fucntion");
    return undefined;
}

function returnTruthy() {
    console.log("truth fucntion");
    return 1;
}

console.log(returnFalsy() && returnTruthy());
console.log(returnTruthy() && returnFalsy());

console.log(returnFalsy() || returnTruthy());
console.log(returnTruthy() || returnFalsy());

// 단락 평가 활용 사례
function printName(person) {
    const name = person && person.name
    console.log("콘솔에 값이 없음");
}

printName();