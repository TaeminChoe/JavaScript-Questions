"use strict";

/* 
  섹션 1. 기본문체풀이
  문제 3. 연필 개수
  작성일 : 2022.04.30
*/

const solution = (n) => {
  const DOZEN = 12;
  return Math.ceil(n / DOZEN);
};

console.log(solution(25));
console.log(solution(178));
