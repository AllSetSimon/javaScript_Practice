'use strict';
/*
Date : 2021 / 01 / 03
시나브로 코딩 세번째 JavaScript 연습입니다.

alert가 계속적으로 뜨면 불편해서 console.log로 대체하여 콘솔상에 출력하오니
크롬으로 접속 시 F12키를 눌러 개발자 모드에서 콘솔창 결과를 확인해주세요!

시나브로 열심히 나아갑시다!
*/

// 논리 연산자
// OR

console.log(1 || 0);
console.log(true || false);
console.log(null || 0 || 1); // false, false, true라서 1이 출력
console.log(undefined || null || 0 || "전부 False라 내가 왔어요");

//단락 평가
console.log(true || "not Printed");
console.log(false || "Printed");

// AND
console.log(1 && 0);
console.log(true && false);
console.log(1 && 2 && null && "wow");

//NOT
console.log(!!1); // !!를 쓰거나 Boolean을 쓰면 결과는 동일하다
console.log(Boolean(1));

//문제
console.log( console.log(1) || 2 || console.log(3) ); // alert(1)을 먼저 평가 (alert 메서드는 undefined를 반환하기 때문에 이후 2로 넘어간다) 2로 넘어가면 truthy를 찾기 때문에 alert(2)가 출력되고 마무리된다.

//과제
//let age = prompt("나이를 입력하세요",'');

//if(!(age >= 14 && age <= 90));
//if(age < 14 && age > 90);

//실습 코드
/*let login_user = prompt("사용자 이름을 입력하세요",'');

if(login_user == "Admin") {
      let login_pwd = prompt("패스워드를 입력하세요.",'');
      if(login_pwd == "TheMaster"){
            alert('환영합니다');
      } else if(login_pwd != null && login_pwd == "" && login_pwd != "TheMaster") {
            alert('인증에 실패하였습니다.');
      } else {
            alert("취소되었습니다");
      }
} */ //내가 쓴 코드

/*let login_user = prompt("사용자 이름을 입력하세요",'');

if(login_user == "Admin") {
      let login_pwd = prompt("패스워드를 입력하세요.",'');
      if(login_pwd == "TheMaster"){
            console.log('환영합니다');
      } else if(login_pwd == null || login_pwd == "") { // 프롬프트에 아무것도 입력하지 않으면 빈 문자열 ''가 반환되고, esc를 누르면 null이 반환된다.
      console.log("취소되었습니다");
      } else { // 비밀번호가 틀리다는 것은 비밀번호가 맞지 않는 한 항상 발생하기 때문에 else로 설정
            console.log('인증에 실패하였습니다.');
      }
}  // 정답 보고 수정해본 코드 */

// null 연산자 '??'
let height = 0;
console.log(height || 100);
console.log(height ?? 100);

//반복문
//while문
let i = 1;
while(i < 10) {
      console.log(i);
      i++;
}

let j = 0
while(true) {
      console.log(j);
      j += 1;
      if ( j == 10){
            break;
      }
}

//for문
for (let k = 0; k < 10; k++) {

      if ( k % 2 ==0) continue;
    
      console.log(k);
    }
    
console.log(Boolean(''));

/*outer:for(let a = 0; a < 3 ; a++) {
      for(let b = 0; b < 3 ; b++) {
            let input = prompt(`(${a},${b})의 값`, '');
            //아무것도 입력하지 않았을 때 ''를 반환하지만 bool형으로 false임
            if(!input) break outer; 
      }
}*/

//과제
for (let c = 0; c < 5; c++) console.log( c );
for (let d = 0; d < 5; ++d) console.log( d );

//실습1
let input_num;
for(input_num = 2 ; input_num <= 10; input_num++){
      if(input_num % 2 == 0) {
            console.log(input_num);
      }
}

/*for (let e = 0; e < 3; e++) {
      console.log( `number ${e}!` );
    }*/
let e = 0;
while(e < 3){
      console.log(`number ${e}!`);
      e++;
}

/*while(true){
      let num_input = prompt("100보다 큰 숫자를 입력하세요!",'');
      if(num_input > 100) {
            break;
      }else if(num_input == nll || num_input == '') {
            break;
      }
}*/

let num_input_right;
do {
      num_input_right = prompt("100보다 큰 숫자를 입력하세요!",'');
} while(num_input_right <= 100 && num_input_right);

//Switch문
let swt_num = 2*3;

switch(swt_num){
      case 4:
            console.log("결과보다 작습니다.");
            break;
      case 6:
            console.log("결과와 일치합니다.");
            break;
      case 7:
            console.log("결과보다 큽니다.");
            break;
      default:
            console.log("어떤값인가요?");
}

/*switch (browser) {
  case 'Edge':
    alert( "Edge를 사용하고 계시네요!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
    break;

  default:
    alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
}*/ 

let browser_name = prompt("사용하고 있는 브라우저는 무엇인가요?",'');

if(browser_name == "Edge"){
      console.log("엣지를 사용하고 계시군요!");
} else if(browser_name == "Chrome" || browser_name == "Firefox" || browser_name == "Safari" || browser_name == "Opera"){
      console.log("No");
} else {
      console.log("현페괜");
}