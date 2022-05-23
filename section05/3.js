"use strict";

/* 
  섹션 5. 효율성
  문제 3. 연속 부분수열 1
  작성일 : 2022.05.19
*/

const solution = (sum, arr) => {
  let i = 0;
  let j = 0;
  let summation = 0;
  let answer = 0;

  while (arr.length > i) {
    if (summation + arr[j] == sum) {
      answer++;
      i++;
      j = i;
      summation = 0;
    } else if (summation + arr[j] < sum) {
      summation += arr[j++];
    } else {
      summation = 0;
      i++;
      j = i;
    }
  }

  return answer;
};

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
