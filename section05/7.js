"use strict";

/* 
  섹션 5. 효율성
  문제 7. 두 배열 합치기
  작성일 : 2022.05.23
*/

const solution = (str1, str2) => {
  const left = {};
  const right = {};
  const sortedLeft = {};
  const sortedRight = {};

  [...str1].forEach((v) => {
    if (left[v]) {
      left[v] += 1;
    } else {
      left[v] = 1;
    }
  });

  [...str2].forEach((v) => {
    if (right[v]) {
      right[v] += 1;
    } else {
      right[v] = 1;
    }
  });

  Object.keys(left)
    .sort()
    .forEach((k) => {
      sortedLeft[k] = left[k];
    });

  Object.keys(right)
    .sort()
    .forEach((k) => {
      sortedRight[k] = right[k];
    });

  return JSON.stringify(sortedLeft) === JSON.stringify(sortedRight)
    ? "YES"
    : "NO";
};

console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "caaab"));
