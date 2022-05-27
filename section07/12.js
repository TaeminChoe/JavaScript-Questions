"use strict";

/* 
  섹션 7. 정렬과 그리디, 결정알고리즘
  문제 12. 마구간 정하기(결정알고리즘)
  작성일 : 2022.05.27
*/

const getCount = (K, arr) => {
  let cnt = 1;
  let diff = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - diff >= K) {
      cnt++;
      diff = arr[i];
    }
  }

  return cnt;
};

const solution = (K, arr) => {
  arr.sort((a, b) => a - b);
  let lt = 2;
  let rt = arr[arr.length - 1] - arr[0];
  let answer = 0;

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    const cnt = getCount(mid, arr);

    if (cnt >= K) {
      lt = mid + 1;
      answer = mid;
    } else {
      rt = mid - 1;
    }
  }

  return answer;
};

console.log(solution(3, [1, 2, 8, 4, 9]));
