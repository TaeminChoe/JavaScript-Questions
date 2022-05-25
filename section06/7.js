"use strict";

/* 
  섹션 6. 자료구조 (스택, 큐)
  문제 7. 교육과정 설계
  작성일 : 2022.05.25
*/

const solution = (need, course) => {
  const queue = [...need];

  [...course].forEach((c) => {
    if (c === queue[0]) {
      queue.shift();
    }
  });

  return queue.length > 0 ? "NO" : "YES";
};

console.log(solution("CBA", "CBDAGE"));
