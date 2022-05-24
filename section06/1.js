"use strict";

/* 
  섹션 6. 자료구조 (스택, 큐)
  문제 1. 올바른 괄호
  작성일 : 2022.05.24 
*/

const solution = (arr) => {
  const bucket = [];
  let size = 0;

  [...arr].forEach((v) => {
    if (size === 0) {
      bucket.push(v);
      size++;
    } else if (size !== 0 && bucket[size] === "(") {
      if (v === ")") {
        bucket.pop();
        size--;
      } else {
        bucket.push(v);
        size++;
      }
    }
  });

  return size > 0 ? "NO" : "YES";
};

console.log(solution("(()(()))(()"));
