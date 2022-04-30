"use strict";

/* 
  섹션 1. 기본문체풀이
  문제 15. 가운데 문자 출력
  작성일 : 2022.04.30
*/

const solution = (word) => {
  const length = [...word].length;
  if (length % 2 === 0) {
    return [...word].splice(length / 2 - 1, 2).join("");
  } else {
    return [...word].splice(length / 2, 1).join("");
  }
};

console.log(solution("study"));
console.log(solution("good"));
