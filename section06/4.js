"use strict";

/* 
  섹션 6. 자료구조 (스택, 큐)
  문제 4. 후위식 연산
  작성일 : 2022.05.25 
*/

const solution = (str) => {
  const bucket = [];
  let size = -1;

  [...str].forEach((v) => {
    switch (v) {
      case "*":
        bucket[size - 1] = bucket[size - 1] * bucket[size];
        bucket.pop();
        size--;
        break;
      case "/":
        bucket[size - 1] = bucket[size - 1] / bucket[size];
        bucket.pop();
        size--;
        break;
      case "-":
        bucket[size - 1] = bucket[size - 1] - bucket[size];
        bucket.pop();
        size--;
        break;
      case "+":
        bucket[size - 1] = bucket[size - 1] + bucket[size];
        bucket.pop();
        size--;
        break;
      default:
        bucket.push(Number(v));
        size++;
        break;
    }
  });

  return bucket[size];
};

console.log(solution("352+*9-"));
