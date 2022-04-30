"use strict";

/* 
  섹션 3. 문자열 탐색
  문제 2. 유효한 팰린드롬
  작성일 : 2022.04.30
*/

const solution = (word) => {
  const arr = word.toLowerCase().replace(/[^a-z]/g, "");

  const reversedArr = [...arr].reverse().join("");
  if (arr === reversedArr) {
    return "YES";
  } else {
    return "NO";
  }
};

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
