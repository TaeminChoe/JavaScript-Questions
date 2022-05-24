"use strict";

/* 
  섹션 6. 자료구조 (스택, 큐)
  문제 2. 괄호문자제거
  작성일 : 2022.05.24 
*/

const solution = (arr) => {
  const bucket = [];
  let size = -1;

  [...arr].forEach((v) => {
    if (v === ")") {
      while (true) {
        bucket.pop();
        size--;

        if (bucket[size] === "(") {
          bucket.pop();
          size--;
          break;
        }
      }
    } else {
      bucket.push(v);
      size++;
    }
  });

  return bucket.join("");
};

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
