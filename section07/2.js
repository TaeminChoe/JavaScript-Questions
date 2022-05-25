"use strict";

/* 
  섹션 7. 정렬과 그리디, 결정알고리즘
  문제 2. 버블정렬
  작성일 : 2022.05.25
*/

const solution = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

console.log(solution([13, 5, 11, 7, 23, 15]));
