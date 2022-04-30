"use strict";

/* 
  섹션 3. 문자열 탐색
  문제 3. 숫자만 추출
  작성일 : 2022.04.30
*/

const solution = (word) => {
  return Number(word.replace(/[^0-9]/g, ""));
};

console.log(solution("gOen2T0s8eSoft"));
