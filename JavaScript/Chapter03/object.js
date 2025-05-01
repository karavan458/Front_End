// key : value

const person1 = {
    name : "김철수",
    age : 25,
    married : false
};

console.log(typeof person1);
console.log(person1);

// . 뒤에 키 이름 (식별자 명명 규칙에 맞을 시)
console.log(
    person1.name,   
);

// [] 안에 키 이름을 문자열로
console.log(
    person1['name']
);

const person1Age = person1.age;
const typeOfMarried = typeof person1['married'];

console.log(person1Age, typeOfMarried);

person1.job = "programmer";
person1['bloodtype'] = "B";

console.log(person1);

person1.age++;
person1['job'] = "PM";

console.log(person1);