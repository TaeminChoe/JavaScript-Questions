"use strict";

/* 
  섹션 1. 기본문체풀이
  문제 13. 대소문자 변환
  작성일 : 2022.04.30
*/

const solution = (word) => {
  return [...word]
    .map((w) => {
      if (w === w.toUpperCase()) return w.toLowerCase();
      else return w.toUpperCase();
    })
    .join("");
};

console.log(solution("StuDY"));
