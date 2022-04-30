"use strict";

/* 
  섹션 1. 기본문체풀이
  문제 14. 가장 긴 문자열
  작성일 : 2022.04.30
*/

const solution = (words) => {
  let answer = "";
  words.forEach((word) => {
    if ([...word].length > [...answer].length) answer = word;
  });
  return answer;
};

const exam = ["teacher", "time", "student", "beautiful", "good"];

console.log(solution(exam));
