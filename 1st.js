/*
Date : 2021 / 01 / 01
시나브로 코딩 첫번째 JavaScript 연습입니다.

alert가 계속적으로 뜨면 불편해서 console.log로 대체하여 콘솔상에 출력하오니
크롬으로 접속 시 F12키를 눌러 개발자 모드에서 콘솔창 결과를 확인해주세요!

시나브로 열심히 나아갑시다!
*/

'use strict'; // 엄격모드 활성화 할 때 사용

//과제1
//alert('자바 스크립트')
console.log('자바스크립트!');

//let으로 변수 선언 및 초기화 그리고 출력방법
let message;
message = 'hello';
//alert(message); // Hello 출력
console.log(message);


// 변수 선언 시 관리법
let user_notRecommend = 'Park', age_notRecommend = 25; // 되지만 권장하지 X

let user_right = 'Park';
let age_right = 25; // 권장

let user_anotherRight = 'Park',
      age_anotherRight = 25; // 다른 방법


//변수 선언 유의사항
let $user = 'SOO'; // 기호$ 사용가능
let a_ge = 25; // 기호 _ 사용가능
console.log($user);

const COLOR_RED = "#F00"; // 상수 선언
let color = COLOR_RED;
//alert(color);
console.log(color);

// 과제2
let admin;
let name_quest = "John";
admin = name_quest;
//alert(admin);
console.log(admin);

//질문에 대한 답 
let currentUserName = "John"; // 현재 접속중인 유저는 달라질 수 있으니까 let

// 문자열 및 백틱 사용
let name_string = "Park";
console.log(`Hello, ${name_string}`);
console.log(`Hello, ${1+2}`);

// typeof 연산자 사용하여 자료형 별 데이터타입 출력
console.log(typeof 10n);
console.log(typeof 'Hello');
console.log(typeof alert); // 함수라고 출력하지만 함수형은 따로 없으며 객체형에 속한다.
console.log(typeof Math);

// prompt와 confirm을 이용한 심플 프로그래밍
let age_prompt = prompt("당신의 나이를 입력하세요", '');
let result = confirm("정확히 입력되었나요?");
if(result === true){
      console.log(`당신의 나이는 ${age_prompt}살 입니다.`);
} else {
      alert('다시 입력바랍니다');
      // 다시 프롬프트가 출력되는 파트는 추후 공부 후 추가해볼 예정
}

//과제3
let name_prompt = prompt("당신의 이름은 무엇인가요?", ''); // 프롬프트 출력
alert(`${name_prompt}님, 환영합니다!`); // 이름 출력




