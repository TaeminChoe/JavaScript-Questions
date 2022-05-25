"use strict";

/* 
  섹션 7. 정렬과 그리디, 결정알고리즘
  문제 4. 삽입 정렬
  작성일 : 2022.05.25
*/

const solution = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
  return arr;
};

console.log(solution([11, 7, 5, 6, 10, 9]));
console.log(solution([11, 7, 10, 3, 14, 9]));
