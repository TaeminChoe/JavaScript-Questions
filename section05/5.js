"use strict";

/* 
  섹션 5. 효율성
  문제 5. 최대 매출
  작성일 : 2022.05.23
*/

const solution = (K, arr) => {
  let maximum = 0;

  for (let i = 0; i <= arr.length - K; i++) {
    const sliceArr = arr.slice(i, i + K);
    const sum = sliceArr.reduce((a, b) => a + b, 0);
    maximum = maximum < sum ? sum : maximum;
  }
  return maximum;
};

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
