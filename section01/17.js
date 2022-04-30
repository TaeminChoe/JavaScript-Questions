"use strict";

/* 
  섹션 1. 기본문체풀이
  문제 17. 중복단어제거
  작성일 : 2022.04.30
*/

const solution = (words) => {
  const answer = [];

  for (let i = 0; i < words.length; i++) {
    if (answer.indexOf(words[i]) === -1) {
      answer.push(words[i]);
    }
  }

  return answer;
};

const exam = ["good", "time", "good", "time", "student"];

console.log(solution(exam));
