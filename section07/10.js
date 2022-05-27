"use strict";

/* 
  섹션 7. 정렬과 그리디, 결정알고리즘
  문제 10. 이분검색
  작성일 : 2022.05.27
*/

const solution = (K, arr) => {
  arr.sort((a, b) => a - b);
  let answer = 0;

  while (true) {
    let size = Math.floor(arr.length / 2);
    if (arr[size] == K) {
      return answer + size + 1;
    } else if (arr[size] > K) {
      arr = arr.slice(0, size);
    } else if (arr[size] < K) {
      answer += size;
      arr = arr.slice(size, arr.length);
    }
  }
};

console.log(solution(99, [23, 87, 65, 12, 57, 32, 99, 81]));
