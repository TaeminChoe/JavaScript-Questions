"use strict";

/* 
  섹션 1. 기본문체풀이
  문제 7. 10부제
  작성일 : 2022.04.30
*/

const solution = (num, carNums) => {
  let cnt = 0;
  carNums.forEach((carNum) => {
    if (carNum % 10 === num) cnt++;
  });
  return cnt;
};

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));
