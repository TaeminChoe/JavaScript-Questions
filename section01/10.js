"use strict";

/* 
  섹션 1. 기본문체풀이
  문제 10. 문자 찾기
  작성일 : 2022.04.30
*/

const solution = (word, alpha) => {
  return [...word].filter((w) => w === alpha).length;
};

console.log(solution("COMPUTERPROGRAMMING", "R"));
