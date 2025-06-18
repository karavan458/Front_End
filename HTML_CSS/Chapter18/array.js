const person1 = {
    name : '김철수',
    age : 25,
    married : false
};

const myArray = [true, 3.14, 'Hello', person1];

console.log(myArray, myArray.length);

console.log(
    myArray[0], // 배열은 시작이 0 부터 시작함
    myArray[1],
    myArray[2],
    myArray[3]
);

myArray[0] = !myArray[0];
myArray[1] *= 100;
myArray[2] += ' World';

console.log(myArray);

myArray.push(123);  // 요소를 추가
console.log(myArray);

const popped1 = myArray.pop();  // 마지막 요소를 반환하며 제거
console.log(popped1, myArray);

myArray.pop();      // 그냥 제거만 하는 용도
console.log(myArray);

const person2 = {
    name : '김달순', 
    age : 23,
    languages : ['Korean', 'English', "French"],
    education : {
        school : '한국대',
        major : ['컴퓨터 공학', '전자 공학'],
        graduated : true
    }
};

console.log(person2.languages[2]);
console.log(person2.education.graduated);