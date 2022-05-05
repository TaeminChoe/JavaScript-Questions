"use strict";

/* 
  섹션 5. 효율성
  문제 1. 두 배열 합치기
  작성일 : 2022.05.05
*/

const solution = (arr1, arr2) => {
  const answer = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      answer.push(arr1.shift());
    } else {
      answer.push(arr2.shift());
    }
  }
  return [...answer, ...arr1, ...arr2];
};

const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];

console.log(solution(arr1, arr2));
