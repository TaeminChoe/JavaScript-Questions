"use strict";

/* 문제11 : for를 이용한 기본 활용
  작성일 : 2022.04.22
*/

const solution = () => {
  let s = 0;
  for (let i = 0; i < 100; i++) s += i;

  return s;
};

console.log(solution());
