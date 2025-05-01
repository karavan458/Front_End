// [요소, 요소, 요소, ....]

const person1 = {
    name : "김철수",
    age : 25,
    married : false
};

const myArray = [true, 3.14, "Hello", person1];
console.log(myArray, myArray.length);

// 프로그래밍 에서는 수를 0부터 셈
console.log(
    myArray[0],
    myArray[1],
    myArray[2],
    myArray[3]
)

myArray[0] = !myArray[0];
myArray[1] *= 100;
myArray[2] += "World";

console.log(myArray);

//요소를 추가
myArray.push(123);
console.log(myArray);

// 마지막 요소를 반환하며 제거
const popped1 = myArray.pop();

console.log(popped1, myArray);

// 그냥 제거만 하는 용도
myArray.pop();

console.log(myArray);