"use strict";

/* 
  섹션 1. 기본문체풀이
  문제 1. 세 수 중 최소값
  작성일 : 2022.04.30
*/

const solution = (a, b, c) => {
  let minimum = a;
  minimum = a > b ? b : a;
  if (minimum > c) minimum = c;

  return minimum;
};

console.log(solution(6, 5, 11));
