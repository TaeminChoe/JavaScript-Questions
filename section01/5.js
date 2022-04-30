"use strict";

/* 
  섹션 1. 기본문체풀이
  문제 5. 최솟값 구하기
  작성일 : 2022.04.30
*/

const solution = (arr) => {
  return arr.reduce((prev, next) => {
    return prev < next ? prev : next;
  });
};

console.log(solution([5, 3, 7, 11, 2, 15, 17]));
