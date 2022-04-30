"use strict";

/* 
  섹션 1. 기본문체풀이
  문제 2. 삼각형 판별하기
  작성일 : 2022.04.30
*/
const getMax = (a, b, c) => {
  let maximum = a > b ? a : b;
  if (maximum < c) maximum = c;
  return maximum;
};

const solution = (a, b, c) => {
  const long = getMax(a, b, c);
  const total = a + b + c;
  return total - long >= long ? "YES" : "NO";
};

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
