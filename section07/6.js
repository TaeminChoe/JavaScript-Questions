"use strict";

/* 
  섹션 7. 정렬과 그리디, 결정알고리즘
  문제 6. 장난꾸러기 현수
  작성일 : 2022.05.25
*/

const solution = (arr) => {
  const answer = [];
  const sortedArr = arr.slice().sort((a, b) => a - b);

  arr.forEach((v, i) => {
    if (arr[i] !== sortedArr[i]) {
      answer.push(i + 1);
    }
  });

  return answer;
};

console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 180]));
console.log(solution([120, 130, 150, 150, 130, 150]));
