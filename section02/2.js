"use strict";

/* 
  섹션 2. 기본문체풀이
  문제 2. 보이는 학생
  작성일 : 2022.04.30
*/

const solution = (array) => {
  let maximum = [array[0]];
  let answer = 1;

  for (let i = 0; i < array.length; i++) {
    if (maximum < array[i]) {
      maximum = array[i];
      answer++;
    }
  }

  return answer;
};

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
