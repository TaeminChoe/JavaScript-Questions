"use strict";

/* 
  섹션 7. 정렬과 그리디, 결정알고리즘
  문제 1. 선택 정렬
  작성일 : 2022.05.25
*/

const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let itemIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[itemIdx] > arr[j]) {
        itemIdx = j;
      }
    }
    [arr[i], arr[itemIdx]] = [arr[itemIdx], arr[i]];
  }

  return arr;
};

console.log(solution([13, 5, 11, 7, 23, 15]));
