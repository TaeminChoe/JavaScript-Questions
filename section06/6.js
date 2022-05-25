"use strict";

/* 
  섹션 6. 자료구조 (스택, 큐)
  문제 6. 공주 구하기
  작성일 : 2022.05.25
*/

const solution = (N, K) => {
  const prince = Array.from({ length: N }, (v, i) => i + 1);

  while (prince.length !== 1) {
    for (let i = 0; i < K - 1; i++) {
      prince.push(prince.shift());
    }
    prince.shift();
  }

  return prince.pop();
};

console.log(solution(8, 3));
