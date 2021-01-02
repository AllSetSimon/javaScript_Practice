'use strict';
/*
Date : 2021 / 01 / 02
시나브로 코딩 두번째 JavaScript 연습입니다.

alert가 계속적으로 뜨면 불편해서 console.log로 대체하여 콘솔상에 출력하오니
크롬으로 접속 시 F12키를 눌러 개발자 모드에서 콘솔창 결과를 확인해주세요!

시나브로 열심히 나아갑시다!
*/

// 형변환
let value = true; // 현재 value 변수의 자료형은 불린형
console.log(typeof value); // Boolean 출력

value = String(value); // 문자열로 임의 형변환
console.log(typeof value); // String 자료형 출력

console.log("6" / "3"); // 문자열이 아닌 숫자로 자동 변환되어 결과값 2 출력

let str = "  123  "; // 문자열
console.log(typeof str);

let num = Number(str); // 숫자형으로 변환
console.log(num);

let cast_unde = undefined;
let cast_null = null;
let cast_true = true;
let unde_num = Number(cast_unde);
let null_num = Number(cast_null);
let true_num = Number(cast_true);
console.log(unde_num); // undefined를 숫자형 변환 시 NaN(Not A Number)
console.log(null_num); // null을 숫자형 변환 시 0
console.log(true_num); // true를 숫자형 변환 시 1

// 기본 연산자와 수학
let apples = "2";
let oranges = "3";
console.log(apples + oranges); // 이항 덧셈 연산자로 문자열을 붙인다. (23출력)
console.log(+apples + +oranges); // 단항 덧셈 연산자를 이용해 숫자형으로 변화시킨다. (5출력)

let a = 1;
let b = 2;
let c = 3 - (a = b+1); // 3 - (a=3) => 3-3=0
console.log(c); // 0 출력

let d,e,f;
d = e = f = 2+2;
console.log(`${d},${e},${f}`);

let count = 5;
count++; // 증가식
console.log(count); // 1 증가한 6출력

let comma_oper = (1+2,3+4);
console.log(comma_oper);

for(a = 3, b = 7, c = a*b; a< 10; a++) {
      console.log("Hello");
}

console.log(a);
console.log(b);
console.log(c);

//과제
let num1 = 1, num2 = 3;
let num3 = ++num1;
let num4 = num2++;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

//let input_num1 = prompt("덧셈 수 입력",'');
//let input_num2 = prompt("덧셈 수 입력",'');
//console.log(+input_num1 + +input_num2);

//비교 연산자
console.log('2'>1);
console.log('01'==1);

console.log(0 == false); // false는 0이니까 true
console.log(0 === false); // 일치 연산자는 엄격해서 자료형까지 보니까 false
console.log(null == undefined); // null과 undefined는 비교시 항상 true (일치 연산자는 다름)
console.log(null == 0); // undefined 아닌 다른 피연산자와 비교시에는 다 false
console.log(null === undefined); // 일치 연산자 적용 시 false
console.log("2" > "12"); // 문자열끼리의 비교는 사전순으로 비교하기 때문에 true

// if 및 조건부 연산자
let age = prompt("몇살입니까?",'');
let result = confirm("확실합니까?");
if(result == true) {
      /*if(age > 19) {
            console.log("19세 이상입니다.");
      } else {
            console.log("미성년자입니다.");
      }*/
     let age_result = (age > 19) ? "성인입니다." : "미성년자입니다."; // ? 조건 연산자 사용
     console.log(age_result);
} else {
      alert("처음부터 다시 시작하십시오");
}

//과제
if("0"){
      console.log("Hello");
} // 빈 문자열이 아니면 truthy이기 때문에 콘솔 출력
let test_result = (a+b < 4) ? "미만":"이상";

let test_login;
let test_message = (test_login == "직원") ? "안녕하세요" : 
(test_login == "임원") ? "환영합니다." : 
(test_login == '') ? "로그인이 필요합니다.":''; // 다수의 ? 조건연산자 사용하여 if문대신 구현