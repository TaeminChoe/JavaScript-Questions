"use strict";

/* 
  섹션 7. 정렬과 그리디, 결정알고리즘
  문제 9. 결혼식
  작성일 : 2022.05.27
*/

const solution = (arr) => {
  const answer = Array.from({ length: 72 }, () => 0);

  exam.forEach((e) => {
    for (let i = e[0]; i < e[1]; i++) {
      answer[i]++;
    }
  });

  return Math.max(...answer);
};

const exam = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];

console.log(solution(exam));
