const $carrot = document.querySelector('section > ul > li');
$carrot.textContent = '제주당근';
console.log($carrot.textContent);

const $carrot = document.querySelector('section > ul > li');

$carrot;

$carrot.textContent;

$carrot.textContent = "제주 당근";

// 목록 형태의 클래스 확인 및 수정
const $onion = document.querySelector('section ul').lastElementChild;

$onion;

$onion.classList;

$onion.classList.remove('hidden');

$onion.classList.add('organic');

// 반복해서 실행할 것
$onion.classList.toggle('soldout');

// css 스타일 확인 및 수정하기
$onion.style;

// 대괄호로 접근하면 css 속성명 그대로 사용 가능
$onion.style['font-size'] = '2em';

// dot 연산자를 사용하려면 camel case 를 사용
$onion.style.fontSize = '1em';