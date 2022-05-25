"use strict";

/* 
  섹션 6. 자료구조 (스택, 큐)
  문제 5. 쇠막대기
  작성일 : 2022.05.25
*/

const solution = (arr) => {
  const bucket = [];
  let size = -1;
  let depth = 0;
  let answer = 0;

  [...arr].forEach((v) => {
    if (v === "(") {
      depth++;
    } else if (v === ")") {
      if (bucket[size] === "(") {
        //래이저
        answer += depth - 1;
      } else {
        answer++;
      }
      depth--;
    }
    bucket.push(v);
    size++;
  });

  return answer;
};

console.log(solution("()(((()())(())()))(())"));
console.log(solution("(((()(()()))(())()))(()())"));
