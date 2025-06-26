// HTML 요소의 속성 확인 및 수정하기
const $hyperlink = document.querySelector('a');

$hyperlink;

$hyperlink.getAttribute('href');

$hyperlink.setAttribute('href', 'https://www.yalco.co.kr');

$hyperlink.getAttribute('href');

// input 요소의 값 확인 및 수정하기
const $message = document.querySelector('input[name=message]');

const $toggle = document.querySelector('input[name=toggle]');

$message;
$toggle;

$message.value = '안녕하세요';

// 반복해서 실행할 것
$toggle.checked = !$toggle.checked;

// 특정 HTML 요소 제거하기
const $ul = document.querySelector('section > ul');

$ul.removeChild($onion);

// 모든 자식 요소 지우기
while($ul.firstElementChild) {
    $ul.removeChild($ul.firstElementChild);
}

// 태그명으로 요소 생성하기
const $tomato = document.createElement('li');

$tomato;

$tomato.textContent = '토마토';

$tomato;

$ul.appendChild($tomato);

const veges = ['상추', '가지', '브로콜리'];

for(const itm of veges) {
    const $el = document.createElement('li');
    $el.textContent = itm;
    $ul.appendChild($el);
};