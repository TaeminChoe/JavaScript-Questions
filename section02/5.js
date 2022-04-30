"use strict";

/* 
  섹션 2. 기본문체풀이
  문제 5. 등수구하기
  작성일 : 2022.04.30
*/

const solution = (array) => {
  const answer = [];

  for (let i = 0; i < array.length; i++) {
    let cnt = 1;

    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        cnt++;
      }
    }
    answer.push(cnt);
  }

  return answer;
};

console.log(solution([87, 89, 92, 100, 76]));
console.log(solution([90, 100, 90, 90, 65]));
