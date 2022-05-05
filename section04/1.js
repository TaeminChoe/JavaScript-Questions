"use strict";

/* 
  섹션 4. 완전 탐색
  문제 1. 자릿수의 합
  작성일 : 2022.05.05
*/

const solution = (arr) => {
  let max = 0;
  let maxValue = [];

  arr.forEach((v) => {
    const num = [...v.toString()];
    const sum = num.reduce((a, b) => a + Number(b), 0);

    if (max <= sum && maxValue.length <= num.length) {
      max = sum;
      maxValue = num;
    }
  });
  return Number(maxValue.join(""));
};

console.log(solution([128, 460, 603, 40, 521, 137, 123]));
