"use strict";

/* 
  섹션 2. 기본문체풀이
  문제 1. 큰 수 출력하기
  작성일 : 2022.04.30
*/

const solution = (num, array) => {
  let answer = [array[0]];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      answer.push(array[i]);
    }
  }

  return answer;
};

console.log(solution(6, [7, 3, 9, 5, 6, 12]));
