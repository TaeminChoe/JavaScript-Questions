"use strict";

/* 
  섹션 7. 정렬과 그리디, 결정알고리즘
  문제 3. Special Sort(구글 인터뷰)
  작성일 : 2022.05.25
*/

const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        if (arr[j] < 0 && arr[j + 1] < 0) {
          continue;
        } else {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  }

  return arr;
};

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));
