// 객체와 배열을 생성하는 메서드 (new 키워드 사용)

//같은 구조의 객체를 쉽게 생성하는 특별한 메서드
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    this.greet = function () {
        console.log(`안녕하세요 제 이름은 ${this.name}입니다.
            저의 나이는 ${this.age}살이고요,
            저는 ${this.job}라는 직업을 갖고 있습니다.`);
    };
}

// Person 기반의 객체 생성
const person1 = new Person("홍길동", 30, "Manager");
const person2 = new Person("김철수", 25, "Designer");

// 동일구조 확인, 메서드 호출
console.log(person1);
console.log(person2);
person1.greet();
person2.greet();
