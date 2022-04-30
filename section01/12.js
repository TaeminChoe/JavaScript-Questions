"use strict";

/* 
  섹션 1. 기본문체풀이
  문제 12. 대문자 통일
  작성일 : 2022.04.30
*/

const solution = (word) => {
  return [...word].map((w) => w.toUpperCase()).join("");
};

console.log(solution("ItisTimeToStudy"));
