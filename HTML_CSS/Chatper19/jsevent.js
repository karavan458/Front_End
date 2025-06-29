// 버튼 클릭 이벤트 추가하기
const myButton = document.querySelector('#myButton');

// 마우스 클릭 이벤트
myButton.addEventListener('click', function() {
    console.log("클릭");
});

// 마우스 오버 이벤트 추가하기
const logMouseEnter = () => { console.log("진입"); };
const logMouseLeave = () => { console.log("이탈"); };

// 마우스 진입/이탈 이벤트
myButton.addEventListener('mouseenter', logMouseEnter);
myButton.addEventListener('mouseleave', logMouseLeave);

// 클릭 좌표 출력 이벤트 추가하기
const clickPosition = document.querySelector('#clickPosition');

clickPosition.addEventListener('click', function(e) {
    console.log(e);
});
// 하나의 이벤트에 여러 콜백 함수 등록 가능
clickPosition.addEventListener('click', function(e) {
    let text = 'x: ';
    text += e.clientX;
    text += ', y: ';
    text += e.clientY;
    clickPosition.textContent = text;
});

// 인풋 요소 이벤트 추가하기
const myInput = document.querySelector('#myInput');

// 인풋 요소등이 사용자 입력을 받을 준비가 된 상태
myInput.addEventListener('focus', () => {
    myInput.setAttribute('placeHolder', '포커스된 상태');
});

// 포커스를 잃어 활성이 아니게 된 상태
myInput.addEventListener('blur', () => {
    myInput.setAttribute('placeHolder', '블러 된 상태');
});

// 인풋 요소의 값이 바뀔 경우
myInput.addEventListener('change', (e) => {
    console.log(e.target.value);
});

// 키입력
myInput.addEventListener('keyup', (e) => {
    console.log(e.key);
});