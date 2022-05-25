"use strict";

/* 
  섹션 7. 정렬과 그리디, 결정알고리즘
  문제 5. Least Recently Used(카카오 캐시 문제 변형)
  작성일 : 2022.05.25
*/

const solution = (N, arr) => {
  const queue = [];

  arr.forEach((v) => {
    const idx = queue.findIndex((q) => q === v);
    if (idx >= 0) {
      queue.unshift(queue.pop(arr[idx]));
    } else {
      queue.unshift(v);
    }
  });

  return queue.slice(0, N);
};

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
