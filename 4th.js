'use strict';
/*
Date : 2021 / 01 / 06
시나브로 코딩 세번째 JavaScript 연습입니다.

alert가 계속적으로 뜨면 불편해서 console.log로 대체하여 콘솔상에 출력하오니
크롬으로 접속 시 F12키를 눌러 개발자 모드에서 콘솔창 결과를 확인해주세요!

시나브로 열심히 나아갑시다!
*/

let userName = "Johnson";

//함수 선언문
function showMsg() {
      let msg = "안녕하세요"; // 지역 변수 선언 및 할당
      console.log(msg + `, ${userName}씨!`); // 외부변수도 함께 호출
}

showMsg(); // 안녕하세요 alert 출력
//alert(msg); // 지역변수는 함수 내에서만 유효하다.


function showPara(from, text) {
      /*if(text == undefined){
            text = "no text";
      }*/
      //text = text || '빈 문자열';
      console.log(`${from} : ${text}`);
} // 매개변수 설정한 함수

showPara("Ann","Hi");
showPara("Ann"); // Ann : undefined(text값 전달하지 않아서)

function showParawithDefault(from, text="no text") {
      console.log(`${from} : ${text}`);


} // 매개변수 및 기본값을 설정한 함수

showParawithDefault("Ann"); // undefined가 아닌 기본값 출력

function showCount(count){
      console.log(count ?? "unknown");
}

showCount(0);
showCount(null);
showCount();

function sumNum(a,b){
      return a+b;
}

let sumResult = sumNum(1,2);
console.log(sumResult);

function checkAge(age){
      if(age >= 18) {
            return true;
      } else {
            return confirm("보호자의 동의를 받았나요?");
      }
}

//if문 사용한 표현식들
/*let confirm_age = prompt("당신의 나이는? ",'');
if(checkAge(confirm_age)) {
      console.log('접속을 허용합니다');
} else {
      console.log('접속을 차단합니다');
}*/

//포인터 함수 표현식을 응용하여 변환
let confirm_age = prompt("당신의 나이는? ",'');
let chk_age = (confirm_age > 18) ? 
// 포인터 함수 표현식으로 변환
      () => console.log("성인입니다") :
      () => console.log("미성년자입니다.");
chk_age(); //함수표현식으로 선언된 경우에는 변수 뒤에 ()를 붙인다.


let cp_showmsg = showMsg; // 함수 복사
cp_showmsg(); // 복사 함수 실행 (실행 시에는 ()붙여줘야함)

//콜백함수 예시
/*function ask(qs, yes, no) {
      if(confirm(qs)) yes();
      else no();
}

function showOk() {
      console.log("동의하셨습니다");
}

function showCancel() {
      console.log("취소합니다");
}

ask("동의하시나요?",showOk, showCancel);*/

//과제 (콜백함수 예시 응용하여 포인터 함수 표현식으로 변환)
function ask(question,yes,no){
      if(confirm(question)) yes()
      else no();
}

ask("동의하십니까",
      () => console.log("고객님은 동의하셨습니다."),
      () => console.log("고객님은 거절하셨습니다."));
      
// 함수 표현식
/*let fnc_sum = function(a,b){
      return a+b;
};*/

// 포인터 함수 표현식 변환
let fnc_sum = (a,b) => a+b;

console.log(fnc_sum(3,4));

let sqaure_num = (n) => n**2; // let square_num = function(n) {return n**2}
console.log(sqaure_num(3));

let sayHi = () => alert('안녕하세요!');
sayHi();

