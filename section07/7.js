"use strict";

/* 
  섹션 7. 정렬과 그리디, 결정알고리즘
  문제 7. 좌표 정렬
  작성일 : 2022.05.25
*/

const solution = (pos) => {
  return pos.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
};

const pos = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];

console.log(solution(pos));
