"use strict";

/* 
  섹션 7. 정렬과 그리디, 결정알고리즘
  문제 11. 뮤직비디오(결정알고리즘)
  작성일 : 2022.05.27
*/

const getDvd = (mid, arr) => {
  let answer = 1;
  let summation = 0;

  arr.forEach((v) => {
    if (summation + v <= mid) {
      summation += v;
    } else {
      answer++;
      summation = v;
    }
  });

  return answer;
};

const solution = (K, arr) => {
  arr.sort((a, b) => a - b);
  let lt = arr[arr.length - 1];
  let rt = arr.reduce((a, b) => a + b, 0);
  let answer;

  console.log(lt, rt);
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    const currDvd = getDvd(mid, arr);
    if (currDvd <= K) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
};

console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
