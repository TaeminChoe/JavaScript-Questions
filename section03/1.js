"use strict";

/* 
  섹션 3. 문자열 탐색
  문제 1. 회문 문자열
  작성일 : 2022.04.30
*/

const solution = (word) => {
  const arr = [...word].map((w) => w.toLowerCase());
  arr.reverse();
  if (arr.join("") === word.toLowerCase()) {
    return "YES";
  } else {
    return "NO";
  }
};

console.log(solution("gooG"));
console.log(solution("nop"));
