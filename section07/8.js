"use strict";

/* 
  섹션 7. 정렬과 그리디, 결정알고리즘
  문제 8. 회의실 배정
  작성일 : 2022.05.27
*/

const solution = (arr) => {
  let maximum = 0;
  let answer = 0;
  let room = 0;
  arr.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

  for (let i = 0; i < arr.length; i++) {
    answer = 0;
    room = 0;
    for (let j = i; j < arr.length; j++) {
      if (arr[j][0] >= room) {
        room = arr[j][1];
        answer++;
      }
    }
    maximum = maximum < answer ? answer : maximum;
  }

  return maximum;
};

const q1 = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];

const q2 = [
  [3, 3],
  [1, 3],
  [2, 3],
];

console.log(solution(q1));
console.log(solution(q2));
