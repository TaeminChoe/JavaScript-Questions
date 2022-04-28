"use strict";

/* 문제16: 로꾸꺼
  작성일 : 2022.04.22
*/

const solution = (str) => {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
};

console.log(solution("거꾸로"));
