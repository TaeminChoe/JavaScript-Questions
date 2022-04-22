"use strict";

/* 문제5: for문 계산
  작성일 : 2022.04.22
*/

const solution = () => {
  let a = 10;
  let b = 2;

  for (let i = 1; i < 5; i += 2) {
    a += i;
  }

  return a + b;
};

console.log(solution());
