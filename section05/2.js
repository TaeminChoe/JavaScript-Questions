"use strict";

/* 
  섹션 5. 효율성
  문제 2. 공통원소 구하기
  작성일 : 2022.05.19
*/

const solution = (arr1, arr2) => {
  const sortedArr1 = arr1.sort((a, b) => a - b);
  const sortedArr2 = arr2.sort((a, b) => a - b);
  const answer = [];

  let i = 0;
  let j = 0;
  while (sortedArr1.length > i && sortedArr2.length > j) {
    if (sortedArr1[i] > sortedArr2[j]) {
      j++;
    } else if (sortedArr1[i] < sortedArr2[j]) {
      i++;
    } else {
      answer.push(sortedArr1[i]);
      i++;
      j++;
    }
  }
  return answer;
};

const arr1 = [1, 3, 9, 5, 2];
const arr2 = [3, 2, 5, 7, 8];

console.log(solution(arr1, arr2));
