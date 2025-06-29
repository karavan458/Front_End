// 태그 명을 사용하여 요소를 선택하는 방식
document.getElementsByTagName('section');

// 상수, 변수로 저장 가능
const $listItem = document.getElementsByTagName('li');
console.log($listItem);

// 클래스 명을 사용하여 요소를 선택하는 방식
document.getElementsByClassName('plant');
document.getElementsByClassName('soldout');

const $plant = document.getElementsByClassName('plant');
console.log($plant);

// 아이디 명을 사용하여 요소를 선택하는 방식
document.getElementById('sweets');

const $sweets = document.getElementById('sweets');
console.log($sweets);

// CSS 선택자로 선택하기
document.querySelector('section');
document.querySelectorAll('section');

document.querySelector('.plant > ul > .soldout');
document.querySelector('#sweets ul > :nth-child(2)');

document.querySelector('section').children;

const $firstUl = document.querySelector('ul');

// 첫번째 자식요소를 선택하려면 first, 마지막 자식요소를 선택하려면 last를 사용하면 된다.
console.log($firstUl.firstElementChild);
console.log($firstUl.lastElementChild);

// 반대로 부모 요소를 반환도 가능
console.log($firstUl.parentElement);