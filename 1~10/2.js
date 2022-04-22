"use strict";

/* 문제2: 배열의 내장 함수
  작성일 : 2022.04.22
*/

const solution = () => {
  const arr = [200, 100, 300];
  arr.splice(2, 0, 10000);
  return arr;
};

console.log(solution());
