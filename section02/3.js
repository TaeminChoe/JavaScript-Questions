"use strict";

/* 
  섹션 2. 기본문체풀이
  문제 3. 가위 바위 보
  작성일 : 2022.04.30
*/

const getWinner = (a, b) => {
  if (a === b) {
    return "D";
  } else if (a < b || (a === 3 && b === 1)) {
    return "B";
  } else {
    return "A";
  }
};

const solution = (A, B) => {
  let answer = [];
  for (let i = 0; i < A.length; i++) {
    answer.push(getWinner(A[i], B[i]));
  }

  return answer;
};

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
