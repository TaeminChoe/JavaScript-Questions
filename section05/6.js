"use strict";

/* 
  섹션 5. 효율성
  문제 6. 학습 회장(해쉬)
  작성일 : 2022.05.23
*/

const solution = (str) => {
  const arr = [...str];
  const hash = {};
  let answer = 0;
  let maximum = 0;

  arr.forEach((v) => {
    if (hash[v]) {
      hash[v] += 1;
    } else {
      hash[v] = 1;
    }
  });

  Object.keys(hash).forEach((key) => {
    if (hash[key] > maximum) {
      maximum = hash[key];
      answer = key;
    }
  });

  return answer;
};

console.log(solution("BACBACCACCBDEDE"));
