"use strict";

/* 문제13: 몇번째 행성인가요?
  작성일 : 2022.04.22
*/

const planets = [
  "수성",
  "금성",
  "지구",
  "화성",
  "목성",
  "토성",
  "천왕성",
  "해왕성",
];

const solution = (idx) => {
  if (idx < 1 || idx > planets.length) {
    return -1;
  }
  return planets[idx - 1];
};

console.log(solution(0));
