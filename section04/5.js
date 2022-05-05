"use strict";

/* 
  섹션 4. 문자열 탐색
  문제 5. K번째 큰 수
  작성일 : 2022.05.05
*/

const solution = (arr, k) => {
  const sumList = [];
  const size = arr.length;

  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      for (let k = j + 1; k < size; k++) {
        const sum = arr[i] + arr[j] + arr[k];
        if (sumList.indexOf(sum) === -1) {
          sumList.push(sum);
        }
      }
    }
  }
  sumList.sort((a, b) => b - a);
  return sumList[k - 1];
};

const exam = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

console.log(solution(exam, 3));
