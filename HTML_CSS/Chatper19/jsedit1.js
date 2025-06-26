const $carrot = document.querySelector('section > ul > li');
$carrot.textContent = '제주당근';
console.log($carrot.textContent);

const $carrot = document.querySelector('section > ul > li');

$carrot;

$carrot.textContent;

$carrot.textContent = "제주 당근";

// 목록 형태의 클래스 확인 및 수정
const $onion = document.querySelector('section ul').lastChild;

$onion;

$onion.classList;

$onion.classList.remove('hidden');

$onion.classList.add('orgainc');

// 반복해서 실행할 것
$onion.classList.toggle('soldout');

// css 스타일 확인 및 수정하기
$onion.style;

$onion.style['font-size'] = '2em';

$onion.style.fontSize = '1em';