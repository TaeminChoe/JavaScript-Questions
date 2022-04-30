"use strict";

/* 
  섹션 1. 기본문체풀이
  문제 11. 대문자 찾기
  작성일 : 2022.04.30
*/

const solution = (word) => {
  return [...word].filter((w) => w === w.toUpperCase()).length;
};

console.log(solution("KoreaTimeGood"));
