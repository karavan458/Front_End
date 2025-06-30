// 문자열 -> 문자들
// - 큰따옴표, 작은따옴표, 혹은 백틱(`)으로 둘러쌓인 텍스트 데이터
// - 자바스크립트는 유니코드를 사용함

let first_name = "Brendan";
let last_name = "Eich";
let description = `미국의 프로그래머로 자바스크립트언어를 만들었으며 모질라의 CEO와 CTO를 역임했다.`;

console.log(first_name, last_name);
console.log(description);

console.log(
    typeof(typeof true),
    typeof(typeof 123.45),
    typeof(typeof "Hello"),
);

// 1. 기본 표기 방법
let word1 = '안녕하세요';
console.log(word1);

let word2 = "반갑습니다";
console.log(word2);

word1 = '작은따옴표 안에 "큰따옴표" 사용';
word2 = "큰따옴표 안에 '작은따옴표' 사용";
console.log(word1, word2);

word1 = '작은따옴표 안에 \'작은따옴표\' 사용';
word2 = "큰따옴표 안에 \"큰따옴표\" 사용";
console.log(word1, word2);

let word = '안녕하세요~\t\t반갑습니다!\n저는 \\홍길동\\입니다.';
console.log(word);

// let longName = '김수한무 거북이와 두루미 삼천갑자 동방삭 치치카포 사리사리센타 워리워리 세브리깡 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원 서생원에 고양이 고양이엔 바둑이 바둑이는 돌돌이';

let longName = '김수한무 거북이와 두루미 \
삼천갑자 동방삭 치치카포 사리사리센타 \
워리워리 세브리깡 무두셀라 구름이 \
허리케인에 담벼락 담벼락에 서생원 \
서생원에 고양이 고양이엔 바둑이 \
바둑이는 돌돌이';

// ⚠️ 줄바뀜 되는 것이 아님
// 큰따옴표도 마찬가지
console.log(longName);

// 2. 백틱
let str1 = `헬로헬로~~`;
console.log(str1);

let str2 = `안녕하세요      반갑습니다!
저는 \\홍길동\\입니다.`;
console.log(str2);

const NAME = "홍길동";
let age = 20;
let married = false;

console.log(
    `제 이름은 ${NAME}, 나이는 ${age}세구요, \
    ${married} ? "기혼" : "미혼"입니다.`
);