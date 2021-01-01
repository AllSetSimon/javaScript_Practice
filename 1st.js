'use strict'; // 엄격모드 활성화 할 때 사용

//alert('자바스크립트!');

let message;
message = 'hello';
//alert(message); // Hello 출력

let user = 'Park', age = 25; // 되지만 권장하지 X

let user_right = 'Park';
let age_right = 25; // 권장

let user_another = 'Park',
      age_another = 25; // 다른 방법

//alert(age_another);

let $user = 'SOO'; // 기호$ 사용가능
let a_ge = 25; // 기호 _ 사용가능
console.log($user);

const COLOR_RED = "#F00"; // 상수 선언
let color = COLOR_RED;
//alert(color);

// 과제2
let admin;
let name_quest = "John";
admin = name_quest;
//alert(admin);

let currentUserName = "John"; // 현재 접속중인 유저는 달라질 수 있으니까 let

let name_string = "Park";
console.log(`Hello, ${name_string}`);
console.log(`Hello, ${1+2}`);

console.log(typeof 10n);
console.log(typeof 'Hello');
console.log(typeof alert); // 함수라고 출력하지만 함수형은 따로 없으며 객체형에 속한다.
console.log(typeof Math);

//let title = "Test";
//let result = prompt(title,"SHIT"); // promt

/*let age_prompt = prompt("당신의 나이를 입력하세요", '');
let result = confirm("정확히 입력되었나요?");
if(result === true){
      console.log(`${age_prompt}살이 입력되었습니다.`);
} else {
      alert('다시 입력바랍니다');
}*/

//과제3
let name_prompt = prompt("당신의 이름은 무엇인가요?", ''); // 프롬프트 출력
alert(`${name_prompt}님, 환영합니다!`); // 이름 출력




