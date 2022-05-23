"use strict";

/* 
  섹션 5. 효율성
  문제 4. 연속 부분수열 2
  작성일 : 2022.05.23
*/

const solution = (K, arr) => {
  let i = 0;
  let j = 0;
  let summation = 0;
  let answer = 0;

  while (arr.length > i) {
    if (summation + arr[j] <= K) {
      summation += arr[j++];
      answer++;
    } else if (j >= arr.length || summation + arr[j] > K) {
      summation = 0;
      i++;
      j = i;
    }
  }

  return answer;
};

console.log(solution(5, [1, 3, 1, 2, 3]));
