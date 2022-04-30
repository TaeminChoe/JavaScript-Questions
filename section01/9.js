"use strict";

/* 
  섹션 1. 기본문체풀이
  문제 9. A를 #으로
  작성일 : 2022.04.30
*/

const solution = (word) => {
  return word.replaceAll("A", "#");
};

console.log(solution("BANANA"));
