"use strict";

/* 문제14: 3의 배수 인가요?
  작성일 : 2022.04.22
*/

const solution = (num) => {
  if (3 % num == 0) {
    return "짝";
  } else {
    return num;
  }
};

console.log(solution(3));
console.log(solution(4));
console.log(solution(5));
