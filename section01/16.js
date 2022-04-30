"use strict";

/* 
  섹션 1. 기본문체풀이
  문제 16. 중복문자제거
  작성일 : 2022.04.30
*/

const solution = (word) => {
  const arr = [...word];
  let answer = "";

  for (let i = 0; i < arr.length; i++) {
    if (!answer.includes(arr[i])) {
      answer += arr[i];
    }
  }
  return answer;
};

console.log(solution("ksekkset"));
