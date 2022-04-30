"use strict";

/* 
  섹션 2. 기본문체풀이
  문제 4. 점수계산
  작성일 : 2022.04.30
*/

const solution = (array) => {
  let answer = 0;
  let score = 1;

  array.forEach((num) => {
    if (num) {
      answer += score++;
    } else {
      score = 1;
    }
  });

  return answer;
};

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
